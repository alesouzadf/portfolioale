import Cabecalho from "../shared/Cabecalho"

export default function Principal() {
	return (
		<div
			className={`
            flex flex-col items-center justify-center h-[500px]  
            bg-[url('/principal.jpg')] bg-cover bg-center
        `}
		>
			<Cabecalho />
			<div className="flex-1 flex flex-col justify-center items-center">
				<h1 className="flex gap-3 items-center">
					<span className="w-2 h-2 rounded-full bg-yellow-300"></span>
					<span className="text-3xl sm:text-5xl font-bold text-center">
						Alessandro de Souza
					</span>
					<span className="w-2 h-2 rounded-full bg-yellow-300"></span>
				</h1>
				<h2>Analista de Sistemas do BB S.A</h2>
			</div>
		</div>
	)
}
