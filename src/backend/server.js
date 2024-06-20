const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

const paes = [
  { id: 1, name: 'Pão de Queijo', price: 5.00, imagem: 'https://media.istockphoto.com/id/1024883060/pt/foto/brazilian-snack-cheese-bread.jpg?s=1024x1024&w=is&k=20&c=o_BMJIofiJ0Gp3zkf2xklESg4DgppoK7gwP9qG20_e4='},
  { id: 2, name: 'Pão Francês', price: 2.50, imagem: 'https://media.istockphoto.com/id/1203260587/pt/foto/freshly-baked-mexican-bolillo-bread.jpg?s=1024x1024&w=is&k=20&c=BCyueH2jSWXzHZM454BjVVLLiAV_5oBk2WFdouJOQ_c=' },
  { id: 3, name: 'Pão de Forma', price: 4.00, imagem: 'https://media.istockphoto.com/id/952196692/pt/foto/sliced-white-bread.jpg?s=1024x1024&w=is&k=20&c=F21DAfKC-IfWwVwm2xWaWMlYuwFRjG0F_DGn5u5OsiE=' },
  { id: 4, name: 'Pão de Batata', price: 6.00, imagem: 'https://media.istockphoto.com/id/1342548247/pt/foto/homemade-potato-bread-on-red-tablecloth.jpg?s=1024x1024&w=is&k=20&c=NxrL1K0DQGHipdIWZ2DtSTBMPLoCs6JcjFu1h5U7EGY='},
  { id: 5, name: 'Pão de Mel', price: 3.00, imagem: 'https://s2-receitas.glbimg.com/XGFcbKYIsP0eILlM_RSra2-IDfI=/0x0:750x440/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/N/P/Jz2YL1QKGzfQGCqXUlwg/pao-de-mel.jpg' }
]; // Lista de pães

const bolos = [
  { id: 1, name: 'Bolo de Cenoura', price: 10.00, imagem: 'https://static.itdg.com.br/images/360-240/d290bc79bcad112ee9095604e45eb262/365326-original.jpg' },
  { id: 2, name: 'Bolo de Chocolate', price: 12.00, imagem: 'https://i.ytimg.com/vi/AWTDL32ADIY/maxresdefault.jpg' },
  { id: 3, name: 'Bolo de Laranja', price: 9.00, imagem: 'https://s2-receitas.glbimg.com/F9dgqtXN9uu_YJvp8uV48PEnhBU=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/N/d/zEcoFRSqGbrt3F6uWpBQ/bolo-de-laranja-com-calda.jpg' },
  { id: 4, name: 'Bolo de Fubá', price: 8.00, imagem: 'https://bakeandcakegourmet.com.br/uploads/site/receitas/bolo-de-fuba-com-ingrediente-surpresa-ec19h3w5.jpg'},
  { id: 5, name: 'Bolo de Milho', price: 10.00, imagem: 'https://static.itdg.com.br/images/360-240/901f400bf4dd4e6e9e2ab65bcec454d8/354055-original.jpg' }
]; // Lista de bolos

app.get('/paes', (req, res) => {
  res.json(paes); // Retorna a lista de pães criada acima
});

app.get('/bolos', (req, res) => {
  res.json(bolos); // Retorna a lista de bolos criada acima
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
}); // Inicia o servidor na porta definida acima
