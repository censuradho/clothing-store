export interface promotion {
  value: number,
  end_date?: string
}

export interface Size {
  label: string
  value: number
}

export interface Color {
  color: string
}

export interface Product {
  id: number
  description: string
  is_new?: boolean
  is_sold_out?: boolean
  brand: string
  rate: number
  price: number
  sku: string
  name: string
  promotion: promotion
  sizes: Size[]
  colors: Color[]
  images: string[]
}