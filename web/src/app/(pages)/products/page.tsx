import { CardProducts } from "@/components/CardProducts"
import { Categories } from "@/components/Categories"

export default function Products() {
  return (
    <main className="flex">
      <Categories />
      <CardProducts />
    </main>
  )
}
