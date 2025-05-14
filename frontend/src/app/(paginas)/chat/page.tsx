"use client"
import useChat from "@/hooks/useChat"
import Mensagem from "@/models/Mensagem"
import { useState } from "react"

export default function chat() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { chatId, mensagens, adicionarMensagem } = useChat()
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [texto, setTexto] = useState("")
	return (
		<div>
			<h1>Chat</h1>
			<h2>Chat ID: {chatId}</h2>

			<ul>
				{mensagens.map((mensagem: Mensagem) => (
					<li key={mensagem.id} className="flex gap-2">
						<div>{mensagem.autor}:</div>
						<div>{mensagem.texto}</div>
					</li>
				))}
			</ul>

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
