import { useNavigate, useParams } from "react-router-dom";
import DefaultButton from "../components/default-button";
import { FaArrowLeft } from "react-icons/fa";
import { getInformation } from "../services/api/get-information";
import { useEffect, useState } from "react";
import CountryInfoCard from "../components/country-info-card";

function Country() {
  const params = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const countryData = async () => {
    let data = await getInformation(`name/${params.name}?fullText=true`);
    let conditional = params.name == "United States";
    console.log(conditional);

    const json = {
      countryName: data[0].name.common,
      capital: data[0].capital,
      svg: data[0].flags.svg,
      maps: data[0].maps.googleMaps,
      population: data[0].population,
      region: data[0].region,
      subregion: data[0].subregion,
    };
    let languages = Object.entries(data[0].languages);
    json.languages = languages[0][1];
    setData(json);
    console.log(data);
  };

  useEffect(() => {
    countryData();
  }, []);

  return (
    <article className="bg-shadow">
      <header className="default-size country__nav">
        <DefaultButton
          className={"country__nav-btn"}
          onClick={() => navigate("/")}
          text={<FaArrowLeft />}
        />
        <h1 className="country__nav-title">{data?.countryName}</h1>
        <span></span>
      </header>
      <main className="default-size country">
        <article className="country__main">
          <img
            src={data?.svg}
            alt={`${data?.countryName}-svg`}
            className="country__svg"
          />
          <CountryInfoCard
            capital={data?.capital}
            population={data?.population}
            languages={data?.languages}
            region={data?.region}
            subregion={data?.subregion}
            link={data?.maps}
          />
        </article>
      </main>
    </article>
  );
}

export default Country;
