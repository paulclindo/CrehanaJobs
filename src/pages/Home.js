import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import styled from "styled-components";
import { ListOfJobCards } from "../containers/ListOfJobCards";
import SearchInput from "../components/SearchInput";
import Filter from "./../components/Filter/index";
import { ListWithQueryCountry } from "../containers/ListWithQueryCountry";
import { ListWithQueryCompany } from "./../containers/ListWithQueryCompany";
import { ListWithQuerySearch } from "./../containers/ListWithQuerySearch";

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
`;
const Logo = styled.div`
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
const Title = styled.h2`
  margin: 2rem 0;
`;

const Home = () => {
  // const queryCountry = "Poland";
  const queryCompany = "Prisma";
  const queryTitle = "JavaScript";

  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Navbar>
        <Logo>
          <img
            src="https://creamas.org/wp-content/uploads/2019/07/Icono-Becas-Crehana-03.png"
            alt=""
          />
          <strong>Jobs</strong>
        </Logo>

        <SearchInput />
      </Navbar>
      <Title>Jobs for you!</Title>
      <Filter />
      {/* {queryCountry ? ( */}
      {/* <ListWithQueryCountry country={queryCountry} /> */}
      {/* <ListWithQueryCountry company={queryCompany} /> */}
      {/* <ListWithQueryCountry company={queryCompany} /> */}
      {/* <ListWithQueryCompany company={queryCompany} /> */}
      {/* <ListWithQuerySearch title={queryTitle} /> */}
      {/* ) : ( */}
      <ListOfJobCards />
    </>
  );
};
export default Home;
