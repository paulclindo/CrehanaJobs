import React from "react";
import { FilterContainer } from "./styles";
import { ListOfCountries } from "../../containers/ListOfCountries";
import { ListOfCompanies } from "../../containers/ListOfCompanies";

const Filter = () => {
  return (
    <FilterContainer>
      <p>Filtrar por</p>
      <div>
        <ListOfCountries />
      </div>
      <div>
        <ListOfCompanies />
      </div>
    </FilterContainer>
  );
};

export default Filter;