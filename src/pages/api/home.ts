import { NextApiRequest, NextApiResponse } from "next";

import db from 'public/database.json'

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(404).send('Not found')

  const arrivals = db.home.arrivals.map(id => 
    db.products.find(value => value.id === id)
  )

  const trandings = db.home.trandings.map(tranding => {

    const products = db.products.filter(value => 
      tranding
      .productIds
      .includes(value.id)
    )

    return {
      ...tranding,
      productIds: undefined,
      products
    }
  })

  return res.json({
    ...db.home,
    trandings,
    arrivals
  })
}