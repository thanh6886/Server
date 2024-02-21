import { Request } from 'express'
import { ROLE } from '../constants/role.enum'
import mongoose, { isValidObjectId } from 'mongoose'

const REGEX_EMAIL =
  /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/
export const isEmail = (email: string) => {
  return REGEX_EMAIL.test(email)
}

export const isMongoId = (id) => isValidObjectId(id)
