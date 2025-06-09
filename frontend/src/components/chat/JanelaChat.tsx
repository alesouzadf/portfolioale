"use client"
import useChat from "@/hooks/useChat"
import { IconMessages, IconReload } from "@tabler/icons-react"

export default function JanelaChat() {
	const { mensagens, limparMensagens } = useChat()

	return (
		<div className="flex flex-col bg-zinc-300 text-black rounded-2xl overflow-hidden">
			<div className="flex justify-between items-center bg-white p-4">
				<h2 className="text-xl font-bold">Olá Visitante</h2>
				<IconReload
					size={24}
					className="text-black cursor-pointer"
					onClick={limparMensagens}
				/>
			</div>
			{mensagens.length === 0 ? (
				<div className="flex flex-col justify-center items-center min-h-[400px] sm:min-h-[500-px]">
					<IconMessages size={230} stroke={0.2} className="text-black/30" />
					<span>Vamos conversar?</span>
				</div>
			) : (
				<div></div>
			)}
			<div className="h-px bg-zinc-400 mt-4"></div>
            
		</div>
	)
}
