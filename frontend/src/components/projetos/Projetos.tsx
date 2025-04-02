import { Projeto } from "@core"
import ItemProjeto from "./ItemProjeto"

export interface ProjetosProps {
	titulo: string
	lista: Projeto[]
}

export default function Projetos(props: ProjetosProps) {
	return (
		<div>
			<h3 className="text-2xl font-bold text-white/70">{props.titulo}</h3>
			<div className="flex gap-4 flex-wrap">
				{props.lista.map((projeto) => {
					return (
						<div key={projeto.id}>
							<ItemProjeto projeto={projeto} />
						</div>
					)
				})}
			</div>
		</div>
	)
}
