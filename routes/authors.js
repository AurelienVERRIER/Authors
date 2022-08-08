const express = require('express')
const app = express()

app.get('/authors', (req, res) => {
  const authors = [
    {
      id: 1,
      name: "Lawrence Nowell",
      nationality: "UK",
      books: ["Beowulf"]
  },
  {
      id: 2,
      name: "William Shakespeare",
      nationality: "UK",
      books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
  },
  {
      id: 3,
      name: "Charles Dickens",
      nationality: "US",
      books: ["Oliver Twist", "A Christmas Carol"]
  },
  {
      id: 4,
      name: "Oscar Wilde",
      nationality: "UK",
      books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
  },
  ]

  res.json(authors)
})

app.get('/', (req, res) => {
  res.json("Authors API")
})

app.get('/authors/:id', (req, res) => {
  const authors = [
    {
      id: 1,
      name: "Lawrence Nowell",
      nationality: "UK",
      books: ["Beowulf"]
  },
  {
      id: 2,
      name: "William Shakespeare",
      nationality: "UK",
      books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
  },
  {
      id: 3,
      name: "Charles Dickens",
      nationality: "US",
      books: ["Oliver Twist", "A Christmas Carol"]
  },
  {
      id: 4,
      name: "Oscar Wilde",
      nationality: "UK",
      books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
  },
  ]
  res.json(authors.name, authors.nationality)
})

app.get('/authors/:id/books', (req, res) => {
  const authors = [
    {
      id: 1,
      name: "Lawrence Nowell",
      nationality: "UK",
      books: ["Beowulf"]
  },
  {
      id: 2,
      name: "William Shakespeare",
      nationality: "UK",
      books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
  },
  {
      id: 3,
      name: "Charles Dickens",
      nationality: "US",
      books: ["Oliver Twist", "A Christmas Carol"]
  },
  {
      id: 4,
      name: "Oscar Wilde",
      nationality: "UK",
      books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
  },
  ]
  res.json(authors.books)
})

app.get('json//authors/:id/books', (req, res) => {
  const authors = [
    {
      id: 1,
      name: "Lawrence Nowell",
      nationality: "UK",
      books: ["Beowulf"]
  },
  {
      id: 2,
      name: "William Shakespeare",
      nationality: "UK",
      books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
  },
  {
      id: 3,
      name: "Charles Dickens",
      nationality: "US",
      books: ["Oliver Twist", "A Christmas Carol"]
  },
  {
      id: 4,
      name: "Oscar Wilde",
      nationality: "UK",
      books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
  },
  ]
  res.json(authors.name, authors.nationality)
})

module.exports = app
