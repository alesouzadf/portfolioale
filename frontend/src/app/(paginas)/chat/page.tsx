"use client"
import ConteudoMD from "@/components/shared/ConteudoMD"
import useChat from "@/hooks/useChat"
import Mensagem from "@/models/Mensagem"
import Image from "next/image"
import { useState } from "react"

export default function chat() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { chatId, mensagens, pensando, adicionarMensagem, limparMensagens } = useChat()
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [texto, setTexto] = useState("")
	return (
		<div>
			<h1>Chat</h1>
			<h2>Chat ID: {chatId}</h2>
			<button onClick={limparMensagens}>Limpar</button>

			<ul>
				{mensagens.map((mensagem: Mensagem) => (
					<li key={mensagem.id} className="flex flex-col gap-2">
						<div>{mensagem.autor}</div>
						<ConteudoMD markdown={mensagem.texto} />
					</li>
				))}
			</ul>

			{pensando && (
				<div>
					<Image src="/pensando.gif" width={50} height={50} alt="pensando" />
				</div>
			)}

			<input
				type="text"
				value={texto}
				className="border border-gray-700 rounded p-2"
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				onChange={(e: any) => {
					setTexto(e.target.value)
				}}
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				onKeyDown={(e: any) => {
					if (e.key === "Enter") {
						adicionarMensagem(texto)
						setTexto("")
					}
				}}
			/>
		</div>
	)
}
