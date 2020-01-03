import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
`;
export const Logo = styled.div`
  display: flex;
  width: 180px;
  align-items: center;
  img {
    height: 100%;
    width: 100%;
  }
  strong {
    color: #00cbd3;
    color: #181b32;
    text-transform: uppercase;
  }
`;
export const Title = styled.h2`
  margin: 2rem 0;
`;
export const FilterContainer = styled.div`
  color: #03cad2;
  display: flex;
  justify-content: space-between;
  margin: 3rem 2rem;
  text-transform: uppercase;
    font-weight: bold;
  label {
    margin: 2rem 0;
    font-size:.7rem;

  }

  input,
  select {
    padding: 0.5rem;
    width: 100%;
    border-top: 0;
    border-right: 0;
    border-bottom: 1px solid #bdc3c7;
    border-left: 0;
    transition: border-bottom-color 0.15s ease-in;

    &:focus {
      outline: 0;
      border-bottom-color: $accent-color;
    }
  }
`
