import React from "react";
import { ListOfJobCardsComponent } from "./../components/ListOfJobCards/index";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Loader from "../components/Loader.js";

const GET_JOBS = gql`
  query getJobs {
    jobs {
      id
      title
      commitment {
        title
      }
      cities {
        id
        name
        country {
          id
          name
        }
      }
      company {
        id
        name
      }
      postedAt
    }
  }
`;

export const ListOfJobCards = () => {
  const { loading, error, data } = useQuery(GET_JOBS);
  if (loading) return <Loader />;

  return <ListOfJobCardsComponent data={data} />;
};
