//@ts-ignore
import countries from 'world-countries';

// Filter countries to include only Kenya

// Map the data for Kenya
const formattedCountries =countries.map((country: any) => ({
  value: country.cca2,
  label: country.name.common,
//   flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));

export const useCountries = () => {
  const getAll = () => formattedCountries;

  const getByValue = (value: string) => {
    return formattedCountries.find((item: any) => item.value === value);
  };

  return {
    getAll,
    getByValue,
  };
};
