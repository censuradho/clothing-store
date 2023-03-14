import { Product } from "../types"

interface Action {
  label: string
  path: string
}

interface Tranding {
  id: number
  title: string
  products: Product[]
}

interface AboveFold {
  title: string
  sub_title: string
  image: string
  action: Action
}

interface CollectionBanner {
  image: string
  collection_type: string
}

interface SeasonSale {
  title: string
  description: string
  action: Action
  image: string
}


export interface Home {
  above_fold: AboveFold[]
  tranding: Tranding[]
  collection_banner: CollectionBanner[]
  arrivals: Product[]
  season_sale: SeasonSale
  collections: Array<{
    id: number
    title: string
    action: Action
    image: string
  }>
}

export type HomeResponse = Home 

