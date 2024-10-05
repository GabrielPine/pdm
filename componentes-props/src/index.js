import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Pedido from './Pedido'
import Cartao from './Cartao'

function App() {
    return <div className='container border p-4'>
        <div className='row'>
            <div className='col-12'>
                <h1 className='display-5 text-center border-bottom mb-4'>Seus Pedidos</h1>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-12 col-lg-6 col-xxl-4'>
                <Cartao cabecalho="22/05/2022"> 
                    <Pedido 
                        titulo="SSD"
                        descricao="SSD 256GB"
                        icone="fa-solid fa-hard-drive fa-2x"/>                    
                </Cartao>
                
            </div>
            <div className='col-sm=12 col col-lg-6 col-xxl-4'>
            <Cartao cabecalho="22/05/2023">
                <Pedido 
                        titulo="Memória"
                        descricao="Memória 16GB"
                        icone="fa-solid fa-memory fa-2x"/>
            </Cartao>
                
            </div>
            <div className='col-sm-12 col-lg-6 col-xxl-4'>
            <Cartao cabecalho="22/05/2024">
                <Pedido 
                            data="22/05/2024"
                            titulo="Foguete"
                            descricao="Foguete de Verdade"
                            icone="fa-solid fa-shuttle-space fa-2x"/>
            </Cartao>
                
            </div>
        </div>
    </div>
    
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)