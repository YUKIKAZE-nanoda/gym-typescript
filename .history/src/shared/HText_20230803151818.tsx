import React from 'react'

type Props = {
    children: React.ReactNode
}

const HText = ({children}: Props) => {
  return (
    <h1 className="basis03/5 font-montserrat text-3xl font-bold"></h1>
  )
}

export default HText;