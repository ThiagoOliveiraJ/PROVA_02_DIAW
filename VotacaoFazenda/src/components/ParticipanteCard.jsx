function ParticipanteCard({ participante, onVotar }) {
    const { nome, votos, naRoca } = participante;

    const { foto } = participante;

    return  (
       <div className={`participante-card ${naRoca ? 'na-roca' : 'card'}`}>
            <img src={foto} alt={nome} className="card-foto" />
            <h2>{nome}</h2>
            {onVotar && (
                <button onClick={() => onVotar(participante)}>Votar</button>
            )}
        </div> 
    );
}



export default ParticipanteCard;