import React from "react";
import { useCountriesContext } from "../context/countries-context";
import Header from "../components/container/header";

function Home() {
  let { saved } = useCountriesContext();

  return (
    <article className="bg-shadow">
      <Header />
      {saved?.map((e) => (
        <div key={e.name.common}>
          <p>{e.name.common}</p>
        </div>
      ))}
    </article>
  );
}

export default Home;
