import { Carousel, CarouselContent } from "../ui/carousel"

export interface CarrosselImagensProps {
	imagens: string[]
}

export default function CarrosselImagens(props: CarrosselImagensProps) {
	return (
		<Carousel>
			<CarouselContent key={}>
				{props.imagens.map((imagem, index) => {
					;<img src={imagem} alt="" />
				})}
			</CarouselContent>
		</Carousel>
	)
}
