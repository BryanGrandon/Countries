import { useNavigate } from "react-router-dom";

function CountryCard({ svg, name }) {
  const navigate = useNavigate();

  return (
    <article className="country-card" onClick={() => navigate(`/${name}`)}>
      <img src={svg} alt="" className="country-card__img" />
      <h2 className="country-card__title">{name}</h2>
    </article>
  );
}

export default CountryCard;
