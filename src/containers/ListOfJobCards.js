import React from "react";
import { ListOfJobCardsComponent } from "./../components/ListOfJobCards/index";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Loader from "../components/Loader.js";
import getJobs from "../graphql/queries/getJobs.gql"

const GET_JOBS = gql`
  ${getJobs}
`;

export const ListOfJobCards = () => {
  const { loading, error, data } = useQuery(GET_JOBS);
  if (loading) return <Loader />;

  return <ListOfJobCardsComponent data={data} />;
};
