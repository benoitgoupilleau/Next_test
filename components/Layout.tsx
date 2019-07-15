import React from 'react';
import styled from 'styled-components';

import Footer from './Footer'
import Header from './Header'

import GlobalStyle from './theme';

const Container = styled.div`
  margin: 0 auto;
  max-width: 750px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex-grow: 1;
`;

export interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <Container>
            <GlobalStyle />
            <Content>
                <Header />
                {children}
            </Content>
            <Footer />
        </Container>
    )
}

export default Layout;
