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

export const ListOfCountries = (props) => {
    const onCountryChange = (value) => {
        props.onChange(value)
    }

    const { loading, error, data } = useQuery(GET_COUNTRIES);
    if (loading) return "Loading...";

    return <CountriesListComponent onChange={onCountryChange} data={data} />;
};
