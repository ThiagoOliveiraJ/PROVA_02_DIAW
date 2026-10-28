import { calcularResultado, calcularTotalVotos, obterVotos } from "../services/votacaoService";

function Resultado() {
    const [votos, setVotos] = useState(() => obterVotos());
    const total = calcularTotalVotos(votos);
    const resultado = calcularResultado(votos);


    function handleZerarVotos() {
        if(window.confirm("Tem certeza que deseja zerar os votos?")) {
            zerarVotos();
            setVotos([]);
        }


    return (

  


        <div className="resultado">
            <h1>Parcial da eliminação</h1>
            <p> <span>{total}</span> votos computados</p>

            <div>
                {resultado.map((r) => (
                    <div key={r.id} className="resultado-participante">
                        <img src={r.foto} alt={r.nome} />
                        <p>{r.nome}</p>
                        <div className="barra-preenchida">
                        </div>
                    </div>

                ))}
            </div>


        </div>
    );
}
}