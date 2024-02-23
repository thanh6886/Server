require('dotenv').config()
export const config = {
  SECRET_KEY: process.env.SECRET_KEY_JWT || '',
  EXPIRE_ACCESS_TOKEN: 7 * 24 * 60 * 60,
  EXPIRE_REFRESH_TOKEN: 100 * 24 * 60 * 60,
}

export const FOLDER_UPLOAD = 'upload'

export const FOLDERS = {
  PRODUCT: 'product',
  AVATAR: 'avatar',
}

export const ROUTE_IMAGE = 'images'
