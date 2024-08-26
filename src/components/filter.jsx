import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useCountriesContext } from "../context/countries-context";

function Filter({ onChange, name, options }) {
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
    if (isTrue) {
      setIsDropdown(true);
      setIsTrue(false);
    } else {
      setIsDropdown(false);
      setIsTrue(true);
    }
  };

  return (
    <form
      onChange={onChange}
      className="filter"
      onSubmit={(e) => e.preventDefault()}
    >
      <section className="filter__header" onClick={handlerClickDropdown}>
        <p>
          Filter by {name}{" "}
          <span className={`filter__header-text text-${name}`}>
            {name == "region" ? filterType_1 : filterType_2}
          </span>
        </p>
        {isDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </section>
      <section className="filter__list">
        {isDropdown ? (
          <section className="list">
            {options.map((n) => (
              <label
                className="list__option"
                key={Math.random() * 10}
                onChange={handler}
                style={{
                  color:
                    name == "region"
                      ? filterType_1 == n
                        ? "#f3bf99"
                        : "#fff"
                      : filterType_2 == n
                      ? "#f3bf99"
                      : "#fff",
                }}
              >
                {n}
                <input type="radio" value={n} name={name} />
              </label>
            ))}
          </section>
        ) : null}
      </section>
    </form>
  );
}

export default Filter;
