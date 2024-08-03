import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$rocketseat',
  borderRadius: '4',
  border: 0,
  padding: '4px px'
})

export default function Page() {
  return <Button>Enviar</Button>
}