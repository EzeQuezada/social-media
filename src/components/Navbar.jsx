// components/Navbar.jsx
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuthStore } from "../store/AuthStore";

const Navbar = () => {
  const {signOut } = useAuthStore()
  return (
    <NavContainer>
      <Logo>SOCIAL</Logo>
      <NavLinks>
        <StyledLink to="/home">Home</StyledLink>
        <StyledLink to="/create">Crear Publicación</StyledLink>
        <StyledLink to="/login" onClick={signOut}>Logout</StyledLink>
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #222;
  color: #fff;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #f00;
  }
`;
