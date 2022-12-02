import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import useClientes from "../../hooks/useClientes";

export default function Home() {
  const { 
    cliente, 
    clientes, 
    selecionarCliente,
    salvarCliente,
    excluirCliente, 
    novoCliente,
    tabelaVisivel,
    exibirTabela } = useClientes;

  return (
    <div
      className={`flex justify-center items-center h-screen
    bg-gradient-to-r from-gray-600 to-gray-800`}
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4" onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  );
}
