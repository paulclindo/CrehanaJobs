import React from "react";
import { ListOfJobCards } from "./ListOfJobCards";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { ListOfJobCardsComponent } from "./../components/ListOfJobCards/index";
import jobsByFilter from "../graphql/queries/jobsByFilter.gql";
import Loader from "../components/Loader.js";

const GET_JOBS_FILTERED = gql`
  ${jobsByFilter}
`;

export const ListWithQuery = ({ title, countryId, companyId }) => {
  const { loading, error, data } = useQuery(GET_JOBS_FILTERED, {
    variables: {
      title, countryId, companyId
    }
  });
  if (loading) return <Loader />;
  console.log(data)
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
