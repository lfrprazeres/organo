import Colaborador from '../Colaborador'
import './time.css'

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
    return (

        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: time.corPrimaria }}>
            <input type='color' className='input-cor' value={time.corSecundaria} onChange={evento => {
                mudarCor(evento.target.value, time.nome);
            }} />
            <h3 style={{ borderColor: time.corSecundaria }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.corSecundaria} aoDeletar={aoDeletar} />)}
            </div>
        </section>

    )
}

export default Time