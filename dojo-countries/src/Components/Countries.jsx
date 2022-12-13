import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CountriesList from './CountriesList';

const Countries = () => {

const [countries, setCountries] = useState([]);

    const getCountries = () => {
        axios
        .get('https://restcountries.com/v2/lang/fr')
        .then((response) => response.data)
        .then((data) => {
        console.log(data);
        setCountries(data);
    });
};
    useEffect(() => {
    getCountries()
    }, []);

     console.log(countries, "countries");
     
     return(
     
        <div className="countries">
            {countries?.map((country) => (
            <div >
            <CountriesList 
            name={country?.name} 
            capital={country?.capital} 
            flags={country?.flags.png}
            />
            </div>
            ))}
        </div>
     );
};

export default Countries;