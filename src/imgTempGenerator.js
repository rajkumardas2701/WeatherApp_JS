const getImage = (value) => {
  let url = '';
  if (value === 'Smoke') {
    url = 'images/smoke.gif';
  } else if (value === 'Mist') {
    url = 'images/mist.gif';
  } else if (value === 'Rain') {
    url = 'images/rain.gif';
  } else if (value === 'Clear') {
    url = 'images/clear.gif';
  } else if (value === 'Clouds') {
    url = 'images/clouds.gif';
  } else if (value === 'Snow') {
    url = 'images/snow.gif';
  } else if (value === 'Extreme') {
    url = 'images/extreme.gif';
  } else if (value === 'Thunderstorm') {
    url = 'images/thunderstorm.gif';
  } else if (value === 'Drizzle') {
    url = 'images/drizzle.gif';
  } else if (value === 'Haze') {
    url = 'images/haze.gif';
  } else if (value === 'Fog') {
    url = 'images/fog.gif';
  }
  return url;
};

const temperatures = (temp) => {
  for (let i = 0; i < temp[0].kel.length; i += 1) {
    (temp[1].deg).push((temp[0].kel[i] - 273.15).toFixed(2));
    (temp[2].far).push((temp[0].kel[i] * (9 / 5) - 459.67).toFixed(2));
  }
  return temp;
};

export { getImage, temperatures };