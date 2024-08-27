import React, { useEffect } from "react";
import { useCountriesContext } from "../context/countries-context";
import Header from "../components/container/header";
import CountryCard from "../components/country-card";
import Search from "../components/search";
import DefaultButton from "../components/default-button";

import Filter from "../components/filter";
import { regionFilter, subregionFilter } from "../services/javascript/filter";

function Home() {
  // variable
  let { saved, countriesLimit } = useCountriesContext();
  // handler
  let { handlerClickMoreCountries, handlerChangeSearch, handlerChangeFilter } =
    useCountriesContext();

  let { deleteSearch } = useCountriesContext();

  useEffect(() => {
    deleteSearch();
  }, []);

  return (
    <article className="bg-shadow">
      <Header />
      <main className="main default-size">
        <section className="main__options">
          <Search onChange={handlerChangeSearch} />
          <Filter
            onChange={handlerChangeFilter}
            type="region"
            options={regionFilter}
          />
          <Filter
            onChange={handlerChangeFilter}
            type="subregion"
            options={subregionFilter}
          />
        </section>
        <section className="main__list-of-countries">
          {saved?.map((e) => (
            <CountryCard
              key={Math.random() * 300}
              name={e.name.common}
              svg={e.flags.svg}
            />
          ))}
        </section>
        <section className="main__button">
          {saved?.length < countriesLimit ? (
            <DefaultButton
              text="More Countries"
              onClick={handlerClickMoreCountries}
            />
          ) : null}
        </section>
        {saved?.length == 0 ? <p>No Found</p> : null}
      </main>
    </article>
  );
}

export default Home;
