import React from 'react';
import { Link as LinkR } from "react-router-dom";
import styled from 'styled-components';
import { FaProductHunt } from "react-icons/fa";
import {FaBars} from "react-icons/fa";
import { useTheme } from 'styled-components';
import { Bio } from '../../data/constants';

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0;
  }
`;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledNavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const Span=styled.div`
  padding:0 4px;
  font-weight:500;
  font-size:18px;
`;

export  const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light+99};
    transition: all 0.6s ease-in-out;
    transform: ${({ Open }) => (Open ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ Open }) => (Open ? '100%' : '0')};
    z-index: ${({ Open }) => (Open ? '1000' : '-1000')};

`;

const Navbar = () => {
  const [Open,setOpen]=React.useState(false);
  const theme=useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
        <button
          style={{
            display:"flex",
            alignItems:"center",
            color:"white",
            marginButton:"20;",
            cursor:"pointer",
            background: "transparent",
            outline:"none",
            border:"none",
          }}>
          <FaProductHunt size="3rem"/><Span>Portfolio</Span>
        </button>
        </NavLogo>
        <MobileIcon>
          <FaBars 
          onClick={()=>{setOpen(!Open);
          }}>
          </FaBars>
        </MobileIcon>
        <NavItems>
          <StyledNavLink href="#about">About</StyledNavLink>
          <StyledNavLink href="#skills">Skills</StyledNavLink>
          <StyledNavLink href="#experience">Experience</StyledNavLink>
          <StyledNavLink href="#projects">Projects</StyledNavLink>
          <StyledNavLink href="#education">Education</StyledNavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
      </NavbarContainer>
      {
          Open &&
          <MobileMenu Open={Open}>
            <MobileLink href="#about" onClick={() => {
              setOpen(!Open)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setOpen(!Open)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setOpen(!Open)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setOpen(!Open)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setOpen(!Open)
            }}>Education</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
    </Nav>
  );
};

export default Navbar;
