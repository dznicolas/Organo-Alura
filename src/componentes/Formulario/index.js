import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')
    const [raca, setRaca] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoPersonagemCadastrado({
            nome,
            imagem,
            raca,
            time
        })
        setNome('')
        setImagem('')
        setRaca('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os Personagens! <img src='/imagens/sword.png'></img></h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome do personagem"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Insira a url da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <CampoTexto
                    obrigatorio={true}
                    label="Raça"
                    placeholder="Digite a raça"
                    valor={raca}
                    aoAlterado={valor => setRaca(valor)}
                />

                <ListaSuspensa
                    obrigatorio={true}
                    label="Classe"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />

                <Botao>
                    Criar Jogador
                </Botao>
            </form>
        </section>
    )
}

export default Formulario