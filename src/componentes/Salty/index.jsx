import { useState, useEffect } from 'react';
import mock from '../../mock/salgados.json';
import { Container, Content } from '../../style/CardStyle';

export const Salty = () => {

  const [salty, setSalty] = useState([]);

  useEffect(() => {
    setSalty(mock);
  }, []);

  return (
    <Container>
      <h2>Salgados</h2>
      <Content>
        {salty.map((salty, index) => (
          <li key={index}>
            <h3>{salty.nome}</h3>
            <img src={salty.imagem} alt={salty.nome} />
            <p>R$ {salty.preco}</p>
          </li>
        ))}
      </Content>
    </Container>
  )
}