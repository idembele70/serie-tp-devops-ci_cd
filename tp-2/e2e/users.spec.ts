import test, { expect } from "playwright/test";

test('Users feature', async ({ request, page }) => {
  const BASE_URL = 'http://localhost:8090/api/user/';
  const REAL_USER_INFO = { id: '1', firstName: 'John', lastName: 'Doe', age: 20 };
  const FAKE_USER_INFO = { id: '3254', firstName: 'Fake firstname', lastName: 'Fake lastname', age: 50 };

  await test.step('It should get user with id "1"', async () => {
    const response = await request.get(BASE_URL + 1);
    const responseJSON = await response.json()

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    expect(responseJSON).toEqual(REAL_USER_INFO);
  });

  await test.step('It should stub user with id "1"', async () => {
    await page.route('**/api/user/1', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(FAKE_USER_INFO),
      });
    });

    await page.goto(BASE_URL + 1)
  });

  await test.step('It should get fake user info', async () => {
    const response = await page.evaluate(async () => {
      const response = await fetch('http://localhost:8090/api/user/1', {
        method: 'GET'
      });
      return {
        ok: response.ok,
        json: await response.json(),
        status: response.status
      };
    });

    expect(response.ok).toBeTruthy();
    expect(response.status).toBe(200);
    expect(response.json).not.toEqual(REAL_USER_INFO);
    expect(response.json).toEqual(FAKE_USER_INFO);
  })
})