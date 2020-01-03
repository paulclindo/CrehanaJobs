import React from "react";

export const CountriesListComponent = ({ data: { countries = [] } = {} }) => {
  return (
    <>
      <label>By Country</label>
      <select name="">
        {countries.map(country => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>
    </>
  );
};
