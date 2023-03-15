import { NextApiRequest, NextApiResponse } from "next";
import db from 'public/database.json'

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(401).send('not found')

  const { id } = req.query

  const product = db.products.find(value => value.id === Number(id))
  if (!product) return res.status(401).send('not found')

  return res.json(product)
}