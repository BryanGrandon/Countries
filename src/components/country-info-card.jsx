import { PiCursorClickBold } from "react-icons/pi";
function CountryInfoCard({
  capital,
  population,
  languages,
  region,
  subregion,
  link,
}) {
  return (
    <ul className="list-info">
      <li className="list-info__li">
        Capital: <span className="list-info__element">{capital}</span>
      </li>
      <li className="list-info__li">
        Population: <span className="list-info__element">{population}</span>
      </li>
      <li className="list-info__li">
        Languages: <span className="list-info__element">{languages}</span>
      </li>
      <li className="list-info__li">
        Region: <span className="list-info__element">{region}</span>
      </li>
      <li className="list-info__li">
        Subregion: <span className="list-info__element">{subregion}</span>
      </li>
      <li className="list-info__li">
        Location:
        <a
          className="list-info__element  list-info__link"
          href={link}
          target="__black"
        >
          Google Maps <PiCursorClickBold />
        </a>
      </li>
    </ul>
  );
}

export default CountryInfoCard;
