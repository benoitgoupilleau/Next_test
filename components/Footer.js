import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  margin-top: 3rem;
`;

const Footer = () => {
  return (
    <Wrapper>
      <p>© 2019</p>
    </Wrapper>
  )
}

export default Footer;
