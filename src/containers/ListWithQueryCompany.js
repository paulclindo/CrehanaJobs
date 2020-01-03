import React from "react";
import { ListOfJobCards } from "./ListOfJobCards";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { ListOfJobCardsComponent } from "./../components/ListOfJobCards/index";
import jobsByCompany from "../graphql/queries/jobsByCompany.gql";
const GET_JOBS_BY_COMPANY = gql`
  ${jobsByCompany}
`;

export const ListWithQueryCompany = ({ company }) => {
  const { loading, error, data } = useQuery(GET_JOBS_BY_COMPANY, {
    variables: { company }
  });
  console.log(data, company);
  if (loading) return "Loading...";

  // return (
  //   data &&
  //   data.countries.forEach(el => {
  //     return <ListOfJobCardsComponent data={el} />;
  //   })
  // );
};
