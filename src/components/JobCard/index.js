import React from "react";
import PropTypes from 'prop-types';
import {
  JobCardContainer,
  JobDescription,
  JobDate,
  CompanyPhoto
} from "./styles";

const JobCard = ({ title, postedAt, commitment, cities, company }) => {
  return (
    <>
      <JobCardContainer>
        <CompanyPhoto
          src="https://s.gravatar.com/avatar/121215156dadasd?d=identicon"
          alt="Random Logo Company"
        />
        <JobDescription>
          <h4>
            <strong> {title}</strong>
            <span>{commitment.title}</span>
          </h4>
          <div>
            <span> {company.name} </span>
            <b>🏴</b>
            {cities.map(city => (
              <span key={city.id}>{city.country.name}</span>
            ))}
          </div>
        </JobDescription>
        <JobDate>
          <span>{new Date(postedAt).toDateString()}</span>
        </JobDate>
      </JobCardContainer>
    </>
  );
};

export default JobCard;


JobCard.propTypes = {
  title: PropTypes.string,
  postedAt: PropTypes.string,
  commitment: PropTypes.object,
  cities: PropTypes.array,
  company: PropTypes.object
}
