import React from "react";
import { ListOfJobCards } from "./ListOfJobCards";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { ListOfJobCardsComponent } from "./../components/ListOfJobCards/index";
import jobsByTitle from "../graphql/queries/jobsByTitle.gql";
import Loader from "../components/Loader.js";
const GET_JOBS_BY_TITLE = gql`
  ${jobsByTitle}
`;

export const ListWithQuerySearch = ({ title }) => {
  const { loading, error, data } = useQuery(GET_JOBS_BY_TITLE, {
    variables: { title }
  });
  if (loading) return <Loader />;
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
