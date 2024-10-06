import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class EstacaoClimatica extends Component {

    timer = null

    state = {
        data: null
    }

constructor(props){
    super(props)
    console.log('EC:constructor')
}

componentDidMount(){
    console.log('EC:componentDidMount')
    this.timer = setInterval(()=>{
        const dataAtual = new Date().toLocaleTimeString()
        this.setState({data: dataAtual})
    }, 1000)
}

componentDidUpdate(){
    console.log('EC:componentDidUpdate')
}

componentWillUnmount(){
    console.log('EC:componentWillUnmount')
    clearInterval(this.timer)
}

    render() {
        console.log('EC:render')
        return (
            <div className="card">
                <div className="card-body">
                    <div 
                        style={{height: '6rem'}}
                        className="d-flex align-items-center rounded mb-2">
                        <i className={`fa-solid fa-5x ${this.props.icone}`}></i>
                        <p className="w-75 ms-3 text-center fs-1">{this.props.estacao}</p>
                    </div>
                    <p className="text-center">
                        {
                            this.props.latitude ? 
                                `Coordenadas: ${this.props.latitude}, ${this.props.longitude}. Data: ${this.state.data}`
                            :
                               'Clique no Botão para saber a sua estação climática'
                        }
                    </p>
                    <button 
                    onClick={this.props.obterLocalizacao}
                    className="btn btn-outline-primary w-100 mt-2">Qual a minha estação?</button>
                    <button 
                    className='btn btn-outline-danger w-100 mt-2' 
                    onClick={() => {ReactDOM.unmountComponentAtNode(document.querySelector('#root'))}}>
                        Unmmount
                    </button>
                </div>
            </div>
        )
    }
}
