export const userList = [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      age: 20,
    },
    {
      id: '2',
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
    }
  ]
export const findOne = (id) => userList.find(user => user.id === id);