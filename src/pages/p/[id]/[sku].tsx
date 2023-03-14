import { useRouter } from "next/router"

export default function ProductPage () {
  const router = useRouter()
  
  return (
    <h1>{router.query.sku}, {router.query.id}</h1>
  )
}