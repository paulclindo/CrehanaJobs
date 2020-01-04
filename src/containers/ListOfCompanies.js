import React from "react";
import { CompaniesListComponent } from "../components/CompaniesList";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import getCompanies from "../graphql/queries/getCompanies.gql"

const GET_COMPANIES = gql`
  ${getCompanies}
`;

export const ListOfCompanies = (props) => {
  const onCompanyChange = (value) => {
    props.onChange(value)
  }

  const { loading, error, data } = useQuery(GET_COMPANIES);
  if (loading) return "Loading...";

  return <CompaniesListComponent onChange={onCompanyChange} data={data} />;
};
