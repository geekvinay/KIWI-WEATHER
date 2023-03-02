function getWeather() {
  const stringResponse = localStorage.getItem('dataResponse');
  const JSONResponse = JSON.parse(stringResponse);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const d = new Date();
  let month = months[d.getMonth()];

  let response = {
    city: JSONResponse.location.name,
    temperature: JSONResponse.weather.main.temp,
    date: `${d.getDate()} ${month} ${d.getFullYear()}`,
    time: `${
      d.getHours() > 12 ? d.getHours() - 12 : d.getHours()
    }:${d.getMinutes()} ${d.getHours > 12 ? 'PM' : 'AM'}`,
    forecast: JSONResponse.weather.weather.main,
  };

  return response;
}

export { getWeather };
