//@ts-ignore
import countries from 'world-countries';

// Filter countries to include only Kenya
const kenyaData = countries.filter((country: any) => country.name.common === 'Kenya');

// Map the data for Kenya
const formattedKenya = kenyaData.map((country: any) => ({
  value: country.cca2,
//   label: country.name.common,
//   flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));

export const useKenya = () => {
  const getAll = () => formattedKenya;

  const getByValue = (value: string) => {
    return formattedKenya.find((item: any) => item.value === value);
  };

  return {
    getAll,
    getByValue,
  };
};
