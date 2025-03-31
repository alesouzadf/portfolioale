import Curriculo from "@/components/curriculo"
import Principal from "../../components/landing/Principal"
import { obterTecnologias } from "@/functions/tecnologias"
import Conteiner from "@/components/shared/Conteiner"

export default async function Home() {
	const tecnologias = await obterTecnologias()
	return (
		<div>
			<Principal tecnologias={tecnologias.destaques} />
			<Conteiner className="py-16">
				<Curriculo tecnologias={tecnologias.todas} />
			</Conteiner>
		</div>
	)
}
