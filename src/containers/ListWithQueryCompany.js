import React from "react";
import { ListOfJobCards } from "./ListOfJobCards";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { ListOfJobCardsComponent } from "./../components/ListOfJobCards/index";
import jobsByCompany from "../graphql/queries/jobsByCompany.gql";
import Loader from "../components/Loader.js";
const GET_JOBS_BY_COMPANY = gql`
  ${jobsByCompany}
`;

export const ListWithQueryCompany = ({ companyId }) => {
  const { loading, error, data } = useQuery(GET_JOBS_BY_COMPANY, {
    variables: { companyId }
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
  // return (
  //   data &&
  //   data.countries.forEach(el => {
  //     return <ListOfJobCardsComponent data={el} />;
  //   })
  // );
};
