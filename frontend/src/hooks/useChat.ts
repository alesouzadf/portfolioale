import { Id } from "@core"
import useLocalStorage from "./useLocalStorage"
import Mensagem from "@/models/Mensagem"
import conversar from "@/functions/chat"

export default function useChat() {
	const [chatId] = useLocalStorage<string>("chatId", Id.gerar())
	const [mensagens, setMensagens] = useLocalStorage<Mensagem[]>("mensagens", [])

	async function adicionarMensagem(texto: string) {
		const novaMensagem: Mensagem = {
			id: Id.gerar(),
			texto,
			autor: "Visitante",
			lado: "direito",
			icone: null,
		}

		setMensagens((msgs: Mensagem[]) => [...msgs, novaMensagem])

		const resposta = await conversar(chatId, novaMensagem)

		if (!resposta) return

		const mensagemResposta: Mensagem = {
			id: Id.gerar(),
			texto: resposta,
			autor: "Assistente",
			lado: "esquerdo",
			icone: null,
		}

		setMensagens((msgs: Mensagem[]) => [...msgs, mensagemResposta])
	}

	function limparMensagens() {
		setMensagens([])
	}

	return {
		chatId,
		mensagens,
		adicionarMensagem,
		limparMensagens,
	}
}
