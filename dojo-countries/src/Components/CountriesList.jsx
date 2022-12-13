import React from "react";

const CountriesList = ({name, capital,flags}) =>{

return (
  <div className="CountriesCards">
    <div className="CountryCard">
      <h2>Pays : {name}</h2>
      <h3>Capitale : {capital}</h3>
    </div>
      <img src={flags} alt="flag" className="flagCard"/>
  </div>
);
};

export default CountriesList;