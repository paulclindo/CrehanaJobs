import React from "react";
import { ListOfJobCards } from "./ListOfJobCards";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import jobsByCountry from "../graphql/queries/jobsByCountry.gql";
import { ListOfJobCardsComponent } from "./../components/ListOfJobCards/index";
import Loader from "../components/Loader.js";

const GET_JOBS_BY_COUNTRY = gql`
  ${jobsByCountry}
`;

export const ListWithQueryCountry = ({ countryId }) => {
  const { loading, error, data } = useQuery(GET_JOBS_BY_COUNTRY, {
    variables: { countryId }
  });
  console.log(data)
  if (loading) return <Loader />;
  if (error) return <h1>Something goes wrong!</h1>;
  // return <ListOfJobCardsComponent data={countries} />;
  return (
    <>
      {
        data.countries.map(jobs => {
          return < ListOfJobCardsComponent data={jobs} />
        })
      }
    </>
  )
};
