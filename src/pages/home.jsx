import React from "react";
import { useCountriesContext } from "../context/countries-context";
import Header from "../components/container/header";
import CountryCard from "../components/country-card";

function Home() {
  let { saved } = useCountriesContext();
  console.log(saved);
  return (
    <article className="bg-shadow">
      <Header />
      <article className="main default-size">
        <section className="main__list-of-countries">
          {saved?.map((e) => (
            <CountryCard
              key={e.name.common}
              name={e.name.common}
              svg={e.flags.svg}
            />
          ))}
        </section>
      </article>
    </article>
  );
}

export default Home;
