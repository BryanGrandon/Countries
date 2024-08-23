import React from "react";
import { useCountriesContext } from "../context/countries-context";
import Header from "../components/container/header";
import CountryCard from "../components/country-card";

function Home() {
  let { saved, countriesLimit, handlerClickMoreCountries } =
    useCountriesContext();
  return (
    <article className="bg-shadow">
      <Header />
      <article className="main default-size">
        <section className="main__list-of-countries">
          {saved?.map((e) => (
            <CountryCard
              key={Math.random() * 300}
              name={e.name.common}
              svg={e.flags.svg}
            />
          ))}
        </section>
        {saved?.length < countriesLimit ? (
          <button className="main__button" onClick={handlerClickMoreCountries}>
            More Countries
          </button>
        ) : null}
      </article>
    </article>
  );
}

export default Home;
