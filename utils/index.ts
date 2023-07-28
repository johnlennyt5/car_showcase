export async function fetchCars(){
  const headers = {
    'X-RapidAPI-Key': '2fd22f1714msh5fd5d08594c6f14p1a1170jsn5e863658d1bd',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response =  await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
  });

  const result = await response.json();

  return result;

}
  
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const milageFactor =0.1;
  const ageFactor = 0.05;

  const milageRate = city_mpg * milageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + milageRate + ageRate;

  return rentalRatePerDay.toFixed(0);

}