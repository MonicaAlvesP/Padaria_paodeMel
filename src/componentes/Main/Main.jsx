import React, { useState } from "react"; // Importando o react Hooks
import Cookie from './cookie.png'
import Brownie from './brownie.png'
import Pastel from './pastel.png'
import Coxinha from './coxinha.png'
import Lixeira from './lixeira.png'

function Main() {

    /*

    1° Criar uma const
    2° criar um array [, ] que vai guardar duas coisas [estado, setEstado]
    3° Receber = o hook useState()
    4° Dentro do () colocar o valor inicial

    */

    const [numero, setNumero] = useState(0) // primeiro card
    const [numero2, setNumero2] = useState(0) // segundo card
    const [ , ] = useState()  // terceiro card
    const [ , ] = useState()  // quarto card

    // const [a coisa, habilidade de mudar essa coisa] = useState( valor inicial )

    // ---------------------------Criando a função para adicionar 1 valor - SEM CONDIÇÂO

    // function Adicionar(){
    //     setNumero(numero + 1) 
    //     //setNumero altera o estado (numero), então: setNumero(pega o estado "numero" e some 1 valor a ele)
    // }

    //---------CRIANDO FUNÇÃO COM ARROW FUNCTION , COM CONDIÇÃO

    const Adicionar = () => {
        if (numero < 10) {
            setNumero(numero + 1)
        }
    }

    // ---------------------------Criando função para remover

    function Remover() {
        if (numero > 0) {
            setNumero(numero -1)
        }
    }

    // ---------------------------Aroow function resetar numero

    const Limpar = () =>{
        setNumero(0)
    }

    // ---------------------------Função para o card 2
    const Adicionar2 = () =>{
        if(numero2 < 10) {
            setNumero2(numero2 + 1)
        }
    }

    // ---------------------------Função de remover do card 2

    function Remover2() {
        if(numero2 > 0) {
            setNumero2(numero2 - 1)
        }
    }

    // ----------------------------Função de limpar o card 2

    const Limpar2 = () => {
        setNumero2(0)
    }

    return ( // Retornaremos um html
        <main>
            <div className="card">
                <img className="imgCard" src={Cookie} alt="Cupcake de chocolate"/>
                <h3>R$0,50 uni</h3>
                <button onClick={Adicionar}>Adicionar</button>
                <button onClick={Remover}>Remover</button>
                <img onClick={Limpar} src="https://cdn-icons-png.flaticon.com/512/54/54324.png" alt="" />
                <h2>{numero}</h2>
            </div>

            <div className="card">
                <img className="imgCard" src={Brownie} alt="Cupcake de chocolate"/>
                <h3>R$01,50 uni</h3>
                <button onClick={Adicionar2}>Adicionar</button>
                <button onClick={Remover2}>Remover</button>
                <img onClick={Limpar2} src="https://cdn-icons-png.flaticon.com/512/54/54324.png" alt="" />
                <h2>{numero2}</h2>
            </div>

            <div className="card">
                <img className="imgCard" src={Pastel}/>
                <h2>R$ 2,50 uni</h2>
                <button>Adicionar</button>
                <button>Remover</button>
                <img onClick={Limpar} src="https://cdn-icons-png.flaticon.com/512/54/54324.png" alt="" />
                <h2> 0 </h2>
            </div>

            <div className="card">
                <img className="imgcard" src={Coxinha}/>
                <h2>R$ 0,70 uni</h2>
                <button>Adicionar</button>
                <button>Remover</button>
                <img onClick={Limpar} src="https://cdn-icons-png.flaticon.com/512/54/54324.png" alt="" />
                <h2> 0 </h2>
            </div>
            
        </main>
    )



}

export default Main