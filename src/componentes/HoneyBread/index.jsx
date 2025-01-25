import { useState, useEffect } from 'react';
import mock from '../../mock/paesdemel.json';
import { Container, Content } from '../../style/CardStyle';

export const HoneyBread = () => {

  const [honeyBread, setHoneyBread] = useState([]);

  useEffect(() => {
    setHoneyBread(mock);
  }, []);

  return (
    <Container>
      <h2>Pães de Mel</h2>
      <Content>
        {honeyBread.map((honeyBread, index) => (
          <li key={index}>
            <h3>{honeyBread.nome}</h3>
            <img src={honeyBread.imagem} alt={honeyBread.nome} />
            <p>R$ {honeyBread.preco}</p>
          </li>
        ))}
      </Content>
    </Container>
  )
}