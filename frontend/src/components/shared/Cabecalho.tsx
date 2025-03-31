import Image from "next/image"
import Conteiner from "./Conteiner"
import Link from "next/link"
import Menu from "./Menu"

export default function Cabecalho() {
	return (
		<header className=" w-full flex items-center h-16 bg-black/50">
			<Conteiner className="flex-1 flex justify-center sm:justify-between">
				<div className="flex items-center gap-10">
					<Link href="/" className="hidden sm:block">
						<Image src="./logo.svg" alt="logo" width={80} height={0} />
					</Link>
					<Menu />
				</div>
				<div className="hidden sm:flex items-center">
					<Link
						href="https://www.linkedin.com/in/alessandro-carvalho-de-souza-2b41b6265"
						target="_blank"
						className="bg-red-500 rounded-full px-7 py-1 text-sm font-bold"
					>
						Perfil
					</Link>
				</div>
			</Conteiner>
		</header>
	)
}
