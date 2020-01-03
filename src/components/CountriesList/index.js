import React from "react";

export const CountriesListComponent = ({ data: { countries = [] } = {}, onChange }) => {
  const onChangeCountry = (e) => {
    const countrySelected = e.target.value
    onChange(countrySelected)
  }
  return (
    <>
      <label>By Country</label>
      <select onChange={onChangeCountry}>
        {countries.map(country => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>
    </>
  );
};
