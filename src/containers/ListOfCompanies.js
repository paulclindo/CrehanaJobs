import React from "react";
import { CompaniesListComponent } from "../components/CompaniesList";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_COMPANIES = gql(`
query getCompanies {
  companies {
    id
    name
  }
}
`);

export const ListOfCompanies = () => {
  const { loading, error, data } = useQuery(GET_COMPANIES);
  if (loading) return "Loading...";

  return <CompaniesListComponent data={data} />;
};