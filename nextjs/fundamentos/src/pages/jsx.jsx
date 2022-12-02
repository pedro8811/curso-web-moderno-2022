import Layout from "../components/Layout"

export default function Jsx(){
  const paragrafo = <p>Armazenando trecho de html em constante</p>

  function subtitulo(){
    return <h2>{"muito legal".toUpperCase()}</h2>
  }

  return(
    <Layout titulo="Entendendo o JSX">
      <div>
        <h1>JSX é um conceito central</h1>
        {subtitulo()}
        {paragrafo}
      </div>
    </Layout>
  )
}