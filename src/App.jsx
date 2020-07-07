import React from 'react'
import Primeiro from "./components/primeiro"
import ComParametro from "./components/ComParametro"
import ComFilhos from "./components/ComFilho"
import Card from "./components/Layout/Card"
import "./App.css"


export default props => (
    <div className="App">

        <Card titulo="#01 - Primeiro componente">
            <Primeiro />
        </Card>
        
        <Card titulo="#02 - Componente com parâmetro">
            <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
        </Card>


        <Card titulo="#03 - Componente com filhos">
            <ComFilhos >
                <ul>
                    <li>Ana</li>
                    <li>Cachorro</li>
                    <li>voador</li>
                    <li>Crawler</li>
                </ul>
            </ComFilhos>
        </Card>

        {/*<Card titulo="Exercício X">Conteudo</Card>*/}
        {/*<ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Cachorro</li>
                <li>voador</li>
                <li>Crawler</li>
            </ul>
        </ComFilhos>*/}




    </div>

)