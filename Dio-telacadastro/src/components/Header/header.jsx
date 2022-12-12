import React from 'react'
import logo from '../../assets/logo-dio.png';

import { Button } from '../Button';

import { Container, Wrapper, Row, MenuRight, ImagemLogo} from './styles';

const Header = () => {
  return (
    <Wrapper>
      <Container>
          <Row>
            <ImagemLogo src={logo} alt="logo da dio"/>
            

          </Row>
          <Row>
              <>
                <MenuRight href="/">Home</MenuRight>
                <MenuRight href='/'>Catálogo</MenuRight>
                <MenuRight href='/'>Planos</MenuRight>
                <MenuRight href='/'>ParaEmpresas</MenuRight>
                <Button title="ENTRAR" />
                <Button title="CADASTRAR" />
              </>
          </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
