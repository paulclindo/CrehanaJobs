import React from "react";
import PropTypes from "prop-types";
export const CountriesListComponent = ({
  data: { countries = [] } = {},
  onChange
}) => {
  const onChangeCountry = e => {
    const countrySelected = e.target.value;
    onChange(countrySelected);
  };
  return (
    <div>
      <label>By Country</label>
      <select onChange={onChangeCountry}>
        <option value="" disabled selected>
          Select your option
        </option>
        {countries.map(country => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

CountriesListComponent.propTypes = {
  data: PropTypes.object,
  onChange: PropTypes.func
};
