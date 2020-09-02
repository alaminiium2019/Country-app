import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const Country = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data.slice(0,15)));
  }, []);

  return (
    <div>
      <h2>Total Countries: {countries.length}</h2>
      {countries.map((country) => (
        <ShowCountry country={country}></ShowCountry>
      ))}
    </div>
  );
};

function ShowCountry(props) {
  const { name, area, capital} = props.country;
  const styleCountry = {
    marginBottom: "30px",
    border: "5px solid red",
    padding: "5px"
  };
  
  let history = useHistory();

  const handleClick=(name)=> {
      history.push(`/details/${name}`)
  }

  return (
    <div style={styleCountry}>
      <p>{name}</p>
      <p>{area}</p>
      <p>{capital}</p>
  

      <h2><Link to={`/details/${name}`}>Details</Link></h2>

      <button onClick={()=>handleClick(name)}>Click Me

      </button>
    </div>
  );
}

export default Country;
