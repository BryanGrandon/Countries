import { createContext, useEffect } from "react";

const CountriesContext = createContext();

// Hook
const useCountriesContext = () => {
  return useContext(PokemonContext);
};

function CountriesContextProvider({ children }) {
  const getAllCountries = async () => {
    const result = await fetch("https://restcountries.com/v3.1/all");
    const data = await result.json();
    console.log(data);
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <CountriesContext.Provider value={20}>{children}</CountriesContext.Provider>
  );
}

export { useCountriesContext, CountriesContextProvider };
