import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product"
import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora eveniet ratione quis sit est possimus commodi, qui deserunt cupiditate dolore, alias beatae aliquid quos sequi dolor pariatur reprehenderit exercitationem?</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}