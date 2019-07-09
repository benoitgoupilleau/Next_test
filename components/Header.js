import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.header`
  padding: 1rem 0 3rem;
`;

const Title = styled.h1`
  color: #000000;
  font-size: 3rem;
  text-decoration: none; 
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
`;

const NavItem = styled.a`
  color: #999;
  font-size: .9rem;
  margin-right: 1.3rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #666;
  }
  &:active {
    color: #333;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Title>Coding test with Nextjs</Title>
      <nav>
        <NavList>
          <li>
            <Link href="/"><NavItem>Home</NavItem></Link>
          </li>
          <li>
            <Link href="/about"><NavItem>About</NavItem></Link>
          </li>
        </NavList>
      </nav>
    </Wrapper>
  )
}

export default Header;
