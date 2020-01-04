import { CountriesListComponent } from "../components/CountriesList";

import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import getCountries from "../graphql/queries/getCountries.gql"

const GET_COUNTRIES = gql`
  ${getCountries}
`;

export const ListOfCountries = (props) => {
    const onCountryChange = (value) => {
        props.onChange(value)
    }

    const { loading, error, data } = useQuery(GET_COUNTRIES);
    if (loading) return "Loading...";
    if (error) return <h1>Something goes wrong!</h1>;


    return <CountriesListComponent onChange={onCountryChange} data={data} />;
};
