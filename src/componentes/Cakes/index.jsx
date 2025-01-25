import { useState, useEffect } from 'react';
import mock from '../../mock/bolos.json';
import { Container, Content } from '../../style/CardStyle';

export const Cakes = () => {

  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    setCakes(mock);
  }, []);

  return (
    <Container>
      <h2>Bolos</h2>
      <Content>
        {cakes.map((cake, index) => (
          <li key={index}>
            <h3>{cake.nome}</h3>
            <img src={cake.imagem} alt={cake.nome} />
            <p>R$ {cake.preco}</p>
          </li>
        ))}
      </Content>
    </Container>
  );
}