import Cabecalho from "@/components/shared/Cabecalho"
import Conteiner from "@/components/shared/Conteiner"
import { obterProjeto } from "@/functions/projetos"

export default async function PaginaProjeto(props: { params: Promise<{ id: string }> }) {
	const { id } = await props.params
	const projeto = await obterProjeto(id)

	return projeto ? (
		<div className="bg-black">
			<Cabecalho />
			<Conteiner className="py-7 flex flex-col gap-10">
				<h1 className="text-3xl font-bold">{projeto.nome}</h1>
			</Conteiner>
		</div>
	) : null
}
