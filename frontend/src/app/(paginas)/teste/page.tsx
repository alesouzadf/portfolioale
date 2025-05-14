"use client"
import useLocalStorage from "@/hooks/useLocalStorage"

export default function Page() {
	const [chat, setChat] = useLocalStorage<string[]>("chat", [])

	return (
		<div className="flex flex-col">
			{chat?.map((msg: string, i: number) => (
				<div key={i}>{msg}</div>
			))}
			<button onClick={() => setChat([...chat, "teste"])}>Add</button>
		</div>
	)
}
