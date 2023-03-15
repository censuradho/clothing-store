import { Size } from "@/services/types";
import { ProductPageProps } from "../../types";

export interface SizeProps {
  data: ProductPageProps['data']['sizes']
  onSelect?: (size: Size) => void
  value?: Size | null
}