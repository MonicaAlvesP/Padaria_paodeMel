import { useState, useEffect } from 'react';
import mock from '../../mock/doces.json';
import { Container, Content } from '../../style/CardStyle';

export const Candy = () => {

  const [candy, setCandy] = useState([]);

  useEffect(() => {
    setCandy(mock);
  }, []);

  return (
    <Container>
      <h2>Doces</h2>
      <Content>
        {candy.map((candy, index) => (
          <li key={index}>
            <h3>{candy.nome}</h3>
            <img src={candy.imagem} alt={candy.nome} />
            <p>R$ {candy.preco}</p>
          </li>
        ))}
      </Content>
    </Container>
  )
}