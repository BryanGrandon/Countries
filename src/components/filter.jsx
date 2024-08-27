import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useCountriesContext } from "../context/countries-context";

function Filter({ onChange, type, options }) {
  let { filterType_1, filterType_2 } = useCountriesContext();

  const handler = (e) => {
    setIsDropdown(false);
    setIsTrue(true);
    // Search
    let $search = document.querySelector(".search__input");
    $search.value = "";
  };

  const [isDropdown, setIsDropdown] = useState();
  const [isTrue, setIsTrue] = useState(true);

  const handlerClickDropdown = () => {
    isTrue
      ? (setIsDropdown(true), setIsTrue(false))
      : (setIsDropdown(false), setIsTrue(true));
  };

  return (
    <form
      onChange={onChange}
      className="filter"
      onSubmit={(e) => e.preventDefault()}
    >
      <section className="filter__header" onClick={handlerClickDropdown}>
        <p>
          Filter by {type}{" "}
          <span className={`filter__header-text text-${type}`}>
            {type == "region" ? filterType_1 : filterType_2}
          </span>
        </p>
        {isDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </section>
      <section className="filter__list">
        {isDropdown ? (
          <section className="list">
            {options.map((n) => (
              <label
                className={
                  type == "region"
                    ? filterType_1 == n
                      ? "list__option filter__on"
                      : "list__option"
                    : filterType_2 == n
                    ? "list__option filter__on"
                    : "list__option"
                }
                key={Math.random() * 10}
                onChange={handler}
              >
                {n}
                <input type="radio" value={n} name={type} />
              </label>
            ))}
          </section>
        ) : null}
      </section>
    </form>
  );
}

export default Filter;
