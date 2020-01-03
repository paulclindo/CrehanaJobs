import React from "react";

export const CompaniesListComponent = ({ data: { companies = [] } = {} }) => {
  return (
    <>
      <label>By company</label>
      <select name="">
        {companies.map(company => (
          <option key={company.id} value={company.id}>
            {company.name}
          </option>
        ))}
      </select>
    </>
  );
};
