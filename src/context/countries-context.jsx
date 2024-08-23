import { createContext, useContext, useEffect, useState } from "react";
import { getInformation } from "../services/api/get-information";

const CountriesContext = createContext();

// Hook
const useCountriesContext = () => {
  return useContext(CountriesContext);
};

function CountriesContextProvider({ children }) {
  const [allCountries, setAllCountries] = useState();
  const [saved, setSaved] = useState();
  const [countriesLimit, setCountriesLimit] = useState();

  const getAllCountries = async () => {
    const data = await getInformation("https://restcountries.com/v3.1/all");
    setAllCountries(data);
    setSaved(data.slice(0, 50));
    setCountriesLimit(data.length);
  };

  const handlerClickMoreCountries = () => {
    let newCountries = allCountries?.slice(saved.length, saved.length + 50);
    setSaved([...saved, ...newCountries]);
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <CountriesContext.Provider
      value={{ saved, countriesLimit, handlerClickMoreCountries }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

export { useCountriesContext, CountriesContextProvider };
