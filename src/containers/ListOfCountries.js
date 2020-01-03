import { CountriesListComponent } from "../components/CountriesList";

import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_COUNTRIES = gql(`
    query getCountries {
        countries {
            id
            name
        }
    }
`);

export const ListOfCountries = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  if (loading) return "Loading...";

  return <CountriesListComponent data={data} />;
};