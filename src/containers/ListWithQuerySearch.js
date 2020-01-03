import React from "react";
import { ListOfJobCards } from "./ListOfJobCards";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { ListOfJobCardsComponent } from "./../components/ListOfJobCards/index";
import jobsByTitle from "../graphql/queries/jobsByTitle.gql";
const GET_JOBS_BY_TITLE = gql`
  ${jobsByTitle}
`;

export const ListWithQuerySearch = ({ title }) => {
  const { loading, error, data } = useQuery(GET_JOBS_BY_TITLE, {
    variables: { title }
  });
  console.log(data);
  if (loading) return "Loading...";
  return <h1>Volvio</h1>;
  //   return (
  //     data &&
  //     data.countries.forEach(el => {
  //       return <ListOfJobCardsComponent data={el} />;
  //     })
  //   );
};
