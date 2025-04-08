import Image from "next/image"

export default function MiniCV() {
	return (
		<div className="flex-1 flex flex-col-reverse md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center md: xl:items-start gap-2 bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
			<div className="relative min-w-72 h-64 self-center">
				<Image src="/minha-foto.jpg" alt="foto de perfil" fill />
			</div>
			<div className="flex flex-col gap-5 self-center py-6 items-center md:items-start lg:items-center xl:items-start">
				<div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
					<span
						className="
                    bg-gradient-to-r from-red-500 via-white to-white
                    text-transparent bg-clip-text text-2xl font-bold
                    "
					>
						Alessandro de Souza
					</span>
					<span>Analista de Sistemas do Banco do Brasil S.A</span>
				</div>
				<p className="text-sm text-center md:text-left lg:text-center xl:text-left">
					Bacharel em Sistemas de Informação e pós-graduado em desenvolvimento mobile
					atuando como Desenvolvedor Senior e Líder Técnico de projetos de alta plataforma
					para solucoes batch com integracao em APIS de parceiros como governo federal,
					BNDES, SERASA, BBTS e migraçõees do legado para microsservicos
				</p>
			</div>
		</div>
	)
}
