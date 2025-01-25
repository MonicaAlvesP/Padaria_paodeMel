import Logo from './padaria.png'
import { HeaderNav, Navigation } from './HeaderStyle'


function Header() {
  return (
    <HeaderNav>
      <Navigation>
        <img className='logo' src={Logo} alt="Logotipo da padaria pao de Mel" />
        <ul>
          <li>Cardápio</li>
          <li>Contatos</li>
          <li>Encomendas</li>
          <li>Unidades</li>
        </ul>
      </Navigation>
    </HeaderNav>
  )
}

export default Header