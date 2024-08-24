import { createContext, useContext, useEffect, useState } from "react";
import { getInformation } from "../services/api/get-information";
import { useNavigate } from "react-router-dom";

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

  // Button More Countries
  const handlerClickMoreCountries = () => {
    if (inChange) {
      // Search
      let newCountries = search?.slice(saved.length, saved.length + 50);
      setSaved([...saved, ...newCountries]);
    } else {
      // Default
      let newCountries = allCountries?.slice(saved.length, saved.length + 50);
      setSaved([...saved, ...newCountries]);
    }
  };

  // Search
  const [search, setSearch] = useState([]);
  const [inChange, setInChange] = useState(false);

  const deleteSearch = () => {
    setInChange(false);
    setSaved(allCountries?.slice(0, 50));
    setCountriesLimit(allCountries?.length);
  };

  const handlerChangeSearch = (e) => {
    let value = e.target.value.toLowerCase();
    if (value !== "") {
      setInChange(true);
      let filtering = allCountries.filter((e) =>
        e.name.common.toLowerCase().includes(value)
      );
      setSearch(filtering);
      setSaved(filtering.slice(0, 50));
      setCountriesLimit(filtering.length);
    } else deleteSearch();
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        saved,
        countriesLimit,
        handlerClickMoreCountries,
        handlerChangeSearch,
        deleteSearch,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

export { useCountriesContext, CountriesContextProvider };
