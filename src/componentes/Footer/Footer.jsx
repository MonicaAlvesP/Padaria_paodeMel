import React, { useState, useEffect } from "react";
import { FooterContainer } from "./FooterStyle";

function Footer() {
  const [numero, setNumero] = useState(0);

  const Mensagem = () => {
    setTimeout(() => {
      alert("Na compra de 2 pedaços de Bolo, ganhe 1 totalmente de graça!");
    }, 3000);
  };

  const increment = () => {
    setNumero(numero + 1);
  };

  const decrement = () => {
    setNumero(numero - 1);
  };

  useEffect(() => {
    document.title = `Contador: ${numero}`;
  }, [numero]);

  return (
    <FooterContainer>
      <h3>Mensagem do setTimeout</h3>
      <button onClick={Mensagem}>Mensagem</button>
      <section>
        <h3>Contador com setTimeout</h3>
        <h3>{numero}</h3>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </section>
    </FooterContainer>
  );
}

export default Footer;
