import { Router } from 'express'

export const routes = Router()

routes.get('/', (req, res) => {
  return res.status(200).json({ message: 'Ola mundo' })
})
