import React from "react";
import JobCard from "./../JobCard/index";
import Loader from "../Loader.js";

export const ListOfJobCardsComponent = ({
  data: { jobs = [], loading, error } = {}
}) => (
    <ul>
      {jobs.map(job => (
        <JobCard key={job.id} {...job} />
      ))}
    </ul>
  );
