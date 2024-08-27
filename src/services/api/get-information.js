const getInformation = async (url) => {
  const response = await fetch("https://restcountries.com/v3.1/" + url);
  const json = await response.json();
  return json;
};

export { getInformation };
