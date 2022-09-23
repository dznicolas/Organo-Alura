import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa mt-2'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required value={props.valor}>
                <option value="" disabled>Escolha a classe...</option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa