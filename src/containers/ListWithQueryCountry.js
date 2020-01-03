import React from "react";
import { ListOfJobCards } from "./ListOfJobCards";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import jobsByCountry from "../graphql/queries/jobsByCountry.gql";
import { ListOfJobCardsComponent } from "./../components/ListOfJobCards/index";

const GET_JOBS_BY_COUNTRY = gql`
  ${jobsByCountry}
`;

export const ListWithQueryCountry = ({ country }) => {
  const { loading, error, data } = useQuery(GET_JOBS_BY_COUNTRY, {
    variables: { country }
  });
  console.log({ data, country });
  const countries = data && data.countries[1];
  // console.log({ countries });
  if (loading) return "Loading...";
  return <ListOfJobCardsComponent data={countries} />;
};
