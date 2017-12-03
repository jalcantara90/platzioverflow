'use strict'

import mongoose, { Schema } from 'mongoose'

const AnswerSchema = new Schema({
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true}
})

export default moongose.model('Answer', AnswerSchema)
