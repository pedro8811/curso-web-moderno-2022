import React from "react";

interface BotaoProps{
  cor?: 'green' | 'blue' | 'gray'
  className?: string
  children: any
  onClick?: () => void
}

export default function Botao(props: BotaoProps){
  const cor = props.cor ?? 'green'
  return(
    <button onClick={props.onClick} className={`
      bg-gradient-to-r from-${cor}-800 to-${cor}-600
      text-white px-4 py-2 rounded-md
      ${props.className}
    `}>
      {props.children}
    </button>
  )
}