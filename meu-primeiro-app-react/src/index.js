import React from "react"
import ReactDOM from "react-dom"

const App = () => {
    return <div>Meu primeiro componente React</div>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)