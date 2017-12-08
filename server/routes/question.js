'use strict'
import express from 'express'
import { required, questionMiddleware } from '../middleware'
import { question } from '../db-api'
import { handleError } from '../utils'
import { User } from '../models'

const app = express.Router()

app.get('/', async (req, res) => {
  try {
    const { sort } = req.query
    const questions = await question.findAll(sort)
    res.status(200).json(questions)
  } catch (err) {
    handleError(err, res)
  }
  
})
app.get('/:id', questionMiddleware,async (req, res) => {
  try {
    res.status(200).json(req.question)
  } catch (err) {
    handleError(err, res)
  }
})

app.post('/', required, async (req, res) => {
  const { title, description, icon } = req.body
  const q = {
    title,
    description,
    icon,
    user: new User(req.user)
  }

  try {
    const savedQuestion = await question.create(q)
    res.status(201).json(savedQuestion)
  } catch (error) {
    handleError(error, res)
  }
})

app.post('/:id/answers', questionMiddleware, required, async (req, res) => {
  const answer = req.body
  const q = req.question
  answer.createdAt = new Date()
  answer.user = req.user._id

  try {
    const savedAnswer = await question.createAnswer(q, answer)
    res.status(201).json(savedAnswer)
  } catch (error) {
    handleError(error, res)
  }
})

export default app
