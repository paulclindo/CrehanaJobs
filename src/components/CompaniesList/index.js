import React from "react";

export const CompaniesListComponent = ({ data: { companies = [] } = {}, onChange }) => {
  const onCompanyChange = (e) => {
    const countrySelected = e.target.value
    onChange(countrySelected)
  }
  return (
    <>
      <label>By company</label>
      <select onChange={onCompanyChange} name="">
        {companies.map(company => (
          <option key={company.id} value={company.id}>
            {company.name}
          </option>
        ))}
      </select>
    </>
  );
};
