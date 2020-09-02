import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const { countryName } = useParams();

  const [country, setCountry] = useState({});

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountry(data[0])); //it has changed.
  }, []);

  return (
    <div>
      <h2>Hello Details: {countryName}</h2>
      <h2>capital: {country.capital}</h2>
      <h3>Region:{country.region}</h3>
    </div>
  );
};

export default CountryDetails;
