/**
 *  Importe do service as funções listarNaRoca(), listarForaDaRoca() e registrarVoto(id). 
Confira os nomes exatos no arquivo votacaoService.js fornecido.
 Guarde no estado (useState) o último participante que recebeu voto e quantas vezes o 
usuário já votou desde que abriu a página
Para os demais peões, reutilize o mesmo ParticipanteCard sem passar onVotar. Assim 
eles aparecem sem botão.
 Exiba a mensagem de confirmação somente quando ultimoVoto não for null, 
mostrando:
o o nome do participante que recebeu o voto;
o quantas vezes o usuário já votou (cuidado com o singular e o plural: “1 vez”, “2 
vezes”);
o um Link para a página /resultado
 * */

import { registrarVoto } from "../services/votacaoService";
import { listarNaRoca } from "../services/votacaoService";
import { listarForaDaRoca } from "../services/votacaoService";
import { useState } from "react";



function Votacao() {
    const [ultimoVoto, setUltimoVoto] = useState(null);
    const [votoNaSessao, setVotoNaSessao] = useState(0);

    
    const foraDaRoca = listarForaDaRoca();
    const naRoca = listarNaRoca();

    function handleVotar(participante) {
        registrarVoto(participante.id);
        setUltimoVoto(participante);
        setVotoNaSessao(votoNaSessao + 1);
    }


    return (
       <div className="votacao">
            <h1>Votação</h1>
            {ultimoVoto && (
                <div className="confirmacao">
                    <p>Você votou em {ultimoVoto.nome}.</p>
                    <p>Você já votou {votoNaSessao} vez(es).</p>
                    <a href="/resultado">Ver resultado</a>
                </div>
            )}

            <h2>Participantes na roça</h2>
            <div className="participantes">
                {naRoca.map((p) => (
                    <ParticipanteCard key={p.id} participante={p} onVotar={handleVotar} />
                ))}
            </div>

            <h2>Participantes fora da roça</h2>
            <div className="participantes">
                {foraDaRoca.map((p) => (
                    <ParticipanteCard key={p.id} participante={p} />
                ))}
            </div>
        </div>

    )
}


export default Votacao;