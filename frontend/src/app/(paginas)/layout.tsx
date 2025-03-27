import React from "react";
import BotaoChat from "../components/chat/BotaoChat";

export default function Layout(props: {children: React.ReactNode}){
    return (
        <div>
            <BotaoChat />
            {props.children}
        </div>)
}
