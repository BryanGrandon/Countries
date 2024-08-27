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
    const data = await getInformation("all");
    setAllCountries(data);
    setSaved(data.slice(0, 50));
    setCountriesLimit(data?.length);
  };

  const initialFlags = () => {
    setSaved(allCountries?.slice(0, 50));
    setCountriesLimit(allCountries?.length);
  };

  // Button More Countries
  const handlerClickMoreCountries = () => {
    let array = inSearch ? search : inFilter ? filter : allCountries;
    let newCountries = array?.slice(saved.length, saved.length + 50);
    setSaved([...saved, ...newCountries]);
  };

  // Search
  const [search, setSearch] = useState([]);
  const [inSearch, setInSearch] = useState(false);

  const deleteSearch = () => {
    setInSearch(false);
    initialFlags();
  };

  const handlerChangeSearch = (e) => {
    let value = e.target.value.toLowerCase();
    if (value !== "") {
      setFilterType_1("all");
      setFilterType_2("all");
      setInSearch(true);
      let filtering = allCountries.filter((e) =>
        e.name.common.toLowerCase().includes(value)
      );
      setSearch(filtering);
      setSaved(filtering.slice(0, 50));
      setCountriesLimit(filtering.length);
    } else deleteSearch();
  };

  // Filter
  const [inFilter, setInFilter] = useState(false);
  const [filter, setFilter] = useState();
  // filter name
  const [filterType_1, setFilterType_1] = useState("all");
  const [filterType_2, setFilterType_2] = useState("all");

  const handlerChangeFilter = async (e) => {
    let type = e.target.name;
    let value = e.target.value;

    if (value == "all") {
      setInFilter(false);
      initialFlags();
      setFilterType_1(value);
      setFilterType_2(value);
    } else if (type == "region" || type == "subregion") {
      setInFilter(true);
      type == "region"
        ? (setFilterType_1(value), setFilterType_2("all"))
        : (setFilterType_2(value), setFilterType_1("all"));
      const url = type == "region" ? `region/${value}` : `subregion/${value}`;
      const data = await getInformation(url);
      setFilter(data);
      setSaved(data.slice(0, 50));
      setCountriesLimit(data.length);
    } else initialFlags();
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
        handlerChangeFilter,
        deleteSearch,
        filterType_1,
        filterType_2,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

export { useCountriesContext, CountriesContextProvider };
