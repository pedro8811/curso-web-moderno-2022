import { useEffect, useState } from "react"
import ColecaoCliente from "../src/backend/db/ColecaoCliente"
import Cliente from "../src/core/Cliente"
import ClienteRespositorio from "../src/core/ClienteRespositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {
  const repo: ClienteRespositorio = new ColecaoCliente()

  const { tabelaVisivel, exibirFormulario, exibirTabela } = useTabelaOuForm()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  useEffect(obterTodos, [])

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente)
    exibirFormulario()
  }
  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }
  function novoCliente() {
    setCliente(Cliente.vazio())
    exibirFormulario()
  }

  return {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    tabelaVisivel,
    exibirTabela,
  }

}