import React from "react";
import PropTypes from 'prop-types';

export const CompaniesListComponent = ({ data: { companies = [] } = {}, onChange }) => {
  const onCompanyChange = (e) => {
    const countrySelected = e.target.value
    onChange(countrySelected)
  }
  return (
    <div>
      <label>By company</label>
      <select onChange={onCompanyChange} name="">
        {companies.map(company => (
          <option key={company.id} value={company.id}>
            {company.name}
          </option>
        ))}
      </select>
    </div>
  );
};

CompaniesListComponent.propTypes = {
  data: PropTypes.object,
  onChange: PropTypes.func
}
