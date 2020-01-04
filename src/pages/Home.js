import React, { Component } from "react";
import GlobalStyles from "../styles/GlobalStyles";
import { Navbar, Logo, Title, FilterContainer } from "../styles/Home"
import { ListOfJobCards } from "../containers/ListOfJobCards";
import SearchInput from "../components/SearchInput";
import { ListWithQuery } from "./../containers/ListWithQuery";
import { ListOfCountries } from "../containers/ListOfCountries"
import { ListOfCompanies } from "../containers/ListOfCompanies"

import OrderInput from "../components/OrderDateInput"

class Home extends Component {
  state = {
    textSearch: "",
    countryId: "",
    companyId: "",
    order: ""
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
  onOrderChange = (value) => {
    this.setState({ order: value })
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
        <ListOfCountries onChange={this.onCountryChange} />
        <ListOfCompanies onChange={this.onCompanyChange} />
        <OrderInput onChange={this.onOrderChange} />
      </FilterContainer>
      {
        (textSearch || countryId || companyId) ?
          <ListWithQuery title={textSearch} countryId={countryId} companyId={companyId} />
          : <ListOfJobCards />

      }
    </>);
  }
}

export default Home;


