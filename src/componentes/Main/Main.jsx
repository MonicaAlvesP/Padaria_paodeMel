import React, { useState, useEffect } from "react";
import { MainContainer, Card, Cart } from "./MainStyle"
import axios from 'axios';

function Main() {
  const [paes, setPaes] = useState([]);
  const [bolos, setBolos] = useState([]);
  const [quantidadePaes, setQuantidadePaes] = useState({});
  const [quantidadeBolos, setQuantidadeBolos] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3001/paes')
      .then(response => setPaes(response.data))
      .catch(error => console.error(error));

    axios.get('http://localhost:3001/bolos')
      .then(response => setBolos(response.data))
      .catch(error => console.error(error));
  }, []);

  const incrementarQuantidadePao = (id) => {
    setQuantidadePaes(prevState => ({
      ...prevState,
      [id]: (prevState[id] || 0) + 1
    }));
  };

  const decrementarQuantidadePao = (id) => {
    setQuantidadePaes(prevState => ({
      ...prevState,
      [id]: Math.max((prevState[id] || 0) - 1, 0)
    }));
  };

  const incrementarQuantidadeBolo = (id) => {
    setQuantidadeBolos(prevState => ({
      ...prevState,
      [id]: (prevState[id] || 0) + 1
    }));
  };

  const decrementarQuantidadeBolo = (id) => {
    setQuantidadeBolos(prevState => ({
      ...prevState,
      [id]: Math.max((prevState[id] || 0) - 1, 0)
    }));
  };

  return (
    <MainContainer>
      <h1>Pães</h1>
      {paes.map(pao => (
        <Card key={pao.id}>
          <h2>{pao.name}</h2>
          <img src={pao.imagem} alt={pao.name} />
          <p>R$ {pao.price.toFixed(2)}</p>
          <br />
          <br />
          <h3>Quantidade</h3>
          <Cart>
            <button onClick={() => incrementarQuantidadePao(pao.id)}>+</button>
            <p>{quantidadePaes[pao.id] || 0}</p>
            <button onClick={() => decrementarQuantidadePao(pao.id)}>-</button>
          </Cart>
        </Card>
      ))}

      <h1>Bolos</h1>
      {bolos.map(bolo => (
        <Card key={bolo.id}>
          <h2>{bolo.name}</h2>
          <img src={bolo.imagem} alt={bolo.name} />
          <p>R$ {bolo.price.toFixed(2)}</p>
          <br />
          <br />
          <h3>Quantidade</h3>
          <Cart>
            <button onClick={() => incrementarQuantidadeBolo(bolo.id)}>+</button>
            <p>{quantidadeBolos[bolo.id] || 0}</p>
            <button onClick={() => decrementarQuantidadeBolo(bolo.id)}>-</button>
          </Cart>
        </Card>
      ))}
    </MainContainer>
  );
}

export default Main;
