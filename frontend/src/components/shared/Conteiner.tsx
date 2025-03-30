import React from "react"

export interface ConteinerProps {
    children: React.ReactNode
    className?: string 
}

export default function Conteiner(props: ConteinerProps){
    return(
        <div className={`
            max-w-7xl mx-auto px-4
            ${props.className} ?? ""
        `}>
            {props.children}
        </div>
    )
}