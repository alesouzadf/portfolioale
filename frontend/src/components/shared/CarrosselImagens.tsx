import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"

export interface CarrosselImagensProps {
	imagens: string[]
}

export default function CarrosselImagens(props: CarrosselImagensProps) {
	return (
		<Carousel opts={{loop: true}}>
			{props.imagens.map((imagem) => {
			return (
				<CarouselContent>
					<CarouselItem key={imagem} className="relative h-96 w-full">
						<Image src={imagem} alt="imagem" fill className="object-cover"/>
					</CarouselItem>
				</CarouselContent>)
			})}
		</Carousel>
	)
}
