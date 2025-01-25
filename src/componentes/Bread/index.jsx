import { useState, useEffect } from 'react';
import mock from '../../mock/paes.json';
import { Container, Content } from '../../style/CardStyle';

export const Bread = () => {

  const [bread, setBread] = useState([]);

  useEffect(() => {
    setBread(mock);
  }, []);

  return (
    <Container>
      <h2>Pães</h2>
      <Content>
        {bread.map((bread, index) => (
          <li key={index}>
            <h3>{bread.nome}</h3>
            <img src={bread.imagem} alt={bread.nome} />
            <p>R$ {bread.preco}</p>
          </li>
        ))}
      </Content>
    </Container>
  )
}