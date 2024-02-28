import React, {useState} from "react";

function Footer() {
    // setTimeout método que executa um bloco de código depois de um determinado tempo.
    //Estrutura de setTimeout()
    //setTimeout(() => {}, tempo)

    const Mensagem = () => {
        setTimeout(() => {
            alert("Na compra de 2 pasteis, ganhe 1 totalmente de graça!")
        }, 3000)
    }


    //setInterval => xecuta um bloco de código a cada intervalo de tempo
    /*const Mensagem2 = () => {
        setInterval(() => {
            alert("VOCÊ NÂO POSUI CADASTRO EM NOSSO SITE!!!")
        }, 5000)
    }*/

    const [numero, setNumero] = useState(0)

    return(
        <footer>
            <h3>Mensagem do setTimeout</h3>
            <button onClick={Mensagem}>Mensagem</button>
            <section>
                <h3>Contador com setTimeout</h3>
                <h3> {numero} </h3>
                <button>+</button>
                <button>-</button>
            </section>
        </footer>
    )
}

export default Footer