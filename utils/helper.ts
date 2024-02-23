import path from 'path'
import { FOLDERS, FOLDER_UPLOAD } from '../constants/config'
import express from 'express'

require('dotenv').config()

const isProduction =
  process.env.NODE_ENV === 'production' || process.argv[2] === 'production'

export const HOST = `http://localhost:${process.env.PORT}`

export function removeAccents(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
}
const dirNameWithEnv = isProduction ? path.dirname(__dirname) : __dirname

export const handlerImage: any = Object.values(FOLDERS).reduce(
  (result: any, current: any) => {
    return [
      ...result,
      express.static(path.join(dirNameWithEnv, `/${FOLDER_UPLOAD}/${current}`)),
    ]
  },
  [express.static(path.join(dirNameWithEnv, `/${FOLDER_UPLOAD}`))]
)
