import React, { Component } from "react";
import GlobalStyles from "../styles/GlobalStyles";
import styled from "styled-components";
import { ListOfJobCards } from "../containers/ListOfJobCards";
import SearchInput from "../components/SearchInput";
import Filter from "./../components/Filter/index";
import { ListWithQueryCountry } from "../containers/ListWithQueryCountry";
import { ListWithQueryCompany } from "./../containers/ListWithQueryCompany";
import { ListWithQuerySearch } from "./../containers/ListWithQuerySearch";
import { ListWithQuery } from "./../containers/ListWithQuery";

import { CountriesListComponent } from "../components/CountriesList"
import { ListOfCountries } from "../containers/ListOfCountries"
import { ListOfCompanies } from "../containers/ListOfCompanies"
import { Navbar, Logo, Title, FilterContainer } from "../styles/Home"

class Home extends Component {
  state = {
    textSearch: "",
    countryId: "",
    companyId: ""
  }

  onSearchChange = (value) => {
    this.setState({ textSearch: value })
  }
  onCountryChange = (value) => {
    this.setState({ countryId: value })
  }
  onCompanyChange = (value) => {
    this.setState({ companyId: value })
  }
  render() {
    const {
      textSearch, countryId, companyId
    } = this.state
    return (<>
      <GlobalStyles />
      <Navbar>
        <Logo>
          <img
            src="https://creamas.org/wp-content/uploads/2019/07/Icono-Becas-Crehana-03.png"
            alt=""
          />
          <strong>Jobs</strong>
        </Logo>

        <SearchInput onChange={this.onSearchChange} />
      </Navbar>
      <Title>Jobs for you!</Title>
      <FilterContainer>
        <p>Filter</p>
        <div>
          <ListOfCountries onChange={this.onCountryChange} />
        </div>
        <div>
          <ListOfCompanies onChange={this.onCompanyChange} />
        </div>
      </FilterContainer>

      {
        // (textSearch && countryId && companyId) ?
        <ListWithQuery title={textSearch} countryId={countryId} companyId={companyId} />
        // : <ListWithQuerySearch />
      }

      }


      {/* <ListWithQueryCountry countryId={countryId} /> */}
      {/* <ListWithQueryCompany companyId={companyId} /> */}
    </>);
  }
}

export default Home;
