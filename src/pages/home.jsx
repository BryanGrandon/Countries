import React from "react";
import { useCountriesContext } from "../context/countries-context";

function Home() {
  let { saved } = useCountriesContext();

  return (
    <article>
      {saved.map((e) => (
        <div>
          <img src={e.flags.svg} alt="" height="100px" />
          <p>{e.name.common}</p>
        </div>
      ))}
    </article>
  );
}

export default Home;
