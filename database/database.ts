require('dotenv').config()
//require mongoose module
import mongoose, { isValidObjectId } from 'mongoose'

//require chalk module to give colors to console text
import chalk from 'chalk'
import { MongoClientOptions, MongoClient } from 'mongodb'

//require database URL from properties file

const dbURL = `mongodb+srv://admin:admin@cluster0.feonno5.mongodb.net/demo`
const connected = chalk.bold.cyan
const error = chalk.bold.yellow
const disconnected = chalk.bold.red
const termination = chalk.bold.magenta

//export this function and imported by server.js
export const connectMongoDB = () => {
  mongoose.connect(dbURL)

  mongoose.connection.on('open', function () {
    console.log(
      connected('Mongoose default connection is open to MongoDB Atlas')
    )
  })

  mongoose.connection.on('error', function (err) {
    console.log(
      error('Mongoose default connection has occured ' + err + ' error')
    )
  })

  mongoose.connection.on('disconnected', function () {
    console.log(disconnected('Mongoose default connection is disconnected'))
  })
  process.on('SIGINT', async () => {
    try {
      await mongoose.connection.close()
      console.log(
        termination(
          'Mongoose default connection is disconnected due to application termination'
        )
      )
      process.exit(0)
    } catch (error) {}
  })
}

export const isValidId = (id: string): boolean => {
  return isValidObjectId(id)
}
