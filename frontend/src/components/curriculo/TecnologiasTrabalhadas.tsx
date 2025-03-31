import { Tecnologia } from "@core"

export interface TecnologiasTrabalhadasProps {
	lista: Tecnologia[]
}

export default function TecnologiasTrabalhadas(props: TecnologiasTrabalhadasProps) {
	return props.lista ? (
		<div className="flex justify-center items-center p-6 w-full bg-black border border-zinc-800 lg:w-72">
			<div className="flex justify-center gap-x-3 flex-wrap">
				{props.lista.map((tecnologia) => {
					return (
						<div key={tecnologia.id}>
							<span className="text-yellow-400 font-bold">#</span>
							<span>{tecnologia.nome}</span>
						</div>
					)
				})}
			</div>
		</div>
	) : null
}
