import express from 'express';
import * as Users from './Users.mjs'
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json('Hello world');
})

app.get('/api/user/:id', (req, res) => {
  const id = req.params.id;
  const user = Users.findOne(id);
  res
    .status(200)
    .json(user)
});

const PORT = process.env.PORT || 8090;

app.listen(PORT, () => {
  console.log('listening on http://localhost:%s', PORT);
})