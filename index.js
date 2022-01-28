const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())


const port = 8000

const users = [
  { username: 'Adrien' },
  { username: 'Michael' },
  { username: 'Steve' },
  { username: 'Eric' },
  { username: 'René' },
  { username: 'Christian' },
  { username: 'Ernest' },
  { username: 'Giuseppe' },
  { username: 'Erika' },
]

// Hello
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// List
app.get('/users', (req, res) => {
  res.send(users)
})

// Create
app.post('/users', (req, res) => {
  const newUser = { username: req.body.username }
  users.push(newUser)
  res.send(newUser)
})

// Delete
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id
  const idx = users.findIndex((user) => user.username == userId)
  if(idx < 0) res.sendStatus(404)
  else {
    users.splice(idx, 1)
    res.send()
  }
})

// Update
app.put('/users/:id', (req, res) => {
  const userId = req.params.id
  const idx = users.findIndex((user) => user.username == userId)

  if(idx < 0) res.sendStatus(404)
  else {
    const newUser = { username: req.body.username }
    users[idx] = newUser
    res.send(newUser)
  }
})

// Start web server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
