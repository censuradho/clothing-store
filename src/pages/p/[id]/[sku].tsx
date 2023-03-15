import { ProductLayout } from "@/layout/product"
import { ProductPageProps } from "@/layout/product/types"
import { productService } from "@/services/produt"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async (context) => {
  const { id, sku } = context.query

  const { data } = await productService.findById(Number(id))

  return {
    props: {
      data
    }
  }
}
export default function ProductPage (props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  
  return (
    <ProductLayout {...props} />
  )
}