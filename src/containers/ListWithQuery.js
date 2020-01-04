import React from "react";
import { ListOfJobCards } from "./ListOfJobCards";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { ListOfJobCardsComponent } from "./../components/ListOfJobCards/index";
import jobsByFilter from "../graphql/queries/jobsByFilter.gql";
import Loader from "../components/Loader.js";

export const GET_JOBS_FILTERED = gql`
  ${jobsByFilter}
`;

export const ListWithQuery = ({ title, countryId, companyId, order }) => {
  const { loading, error, data } = useQuery(GET_JOBS_FILTERED, {
    variables: {
      title,
      countryId,
      companyId,
      order
    }
  });
  if (loading) return <Loader />;
  if (error) return <h1>Something goes wrong!</h1>;

  return (
    <>
      {data.countries.map(jobs => {
        return <ListOfJobCardsComponent data={jobs} />;
      })}
    </>
  );
};
