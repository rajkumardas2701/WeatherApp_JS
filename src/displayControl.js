const displayController = () => {
  const content = document.getElementById('content');
  content.setAttribute('class', 'container');

  const displaySearch = () => {
    const formInput = document.createElement('form');
    formInput.setAttribute('class', 'form-input');
    content.appendChild(formInput);

    const formLabel = document.createElement('span');
    formLabel.setAttribute('id', 'form-label');
    formLabel.innerHTML = 'City:';
    formInput.appendChild(formLabel);

    const formText = document.createElement('input');
    formText.setAttribute('id', 'form-text');
    formInput.appendChild(formText);

    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('id', 'form-submit');
    submit.innerHTML = 'Submit';
    formInput.appendChild(submit);
  };

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
    }
    return url;
  };

  const displayResults = (data) => {
    const resultSection = document.createElement('h2');
    resultSection.setAttribute('class', 'result-section');
    resultSection.textContent = data.name;
    content.appendChild(resultSection);

    const left = document.createElement('div');
    left.setAttribute('class', 'left-side');
    resultSection.appendChild(left);

    const imgSec = document.createElement('div');
    imgSec.setAttribute('class', 'image-section');
    left.appendChild(imgSec);

    const imgText = document.createElement('p');
    imgText.setAttribute('class', 'res_value');
    imgText.innerText = `Weather: ${data.weather[0].main}`;
    imgSec.appendChild(imgText);

    const img = document.createElement('img');
    img.setAttribute('class', 'image');
    img.setAttribute('src', getImage(data.weather[0].main));
    imgSec.appendChild(img);

    const latLon = document.createElement('span');
    latLon.setAttribute('class', 'res_value');
    latLon.innerText = `Latitude: ${data.coord.lat}
    Longitude: ${data.coord.lon}`;
    left.appendChild(latLon);

    const country = document.createElement('span');
    country.setAttribute('class', 'res_value');
    country.innerText = `Country: ${data.sys.country}`;
    left.appendChild(country);

    const right = document.createElement('div');
    right.setAttribute('class', 'right-side');
    resultSection.appendChild(right);

    const temp = document.createElement('span');
    temp.setAttribute('class', 'res_value');
    temp.innerText = `Temperature: ${(data.main.temp - 273.15).toFixed(2)}℃ 
    (Min: ${(data.main.temp_min - 273.15).toFixed(2)}℃ - Max: ${(data.main.temp_max - 273.15).toFixed(2)}℃)`;
    right.appendChild(temp);

    const feels = document.createElement('span');
    feels.setAttribute('class', 'res_value');
    feels.innerText = `Feels Like: ${(data.main.feels_like - 273.15).toFixed(2)}℃`;
    right.appendChild(feels);

    const humidity = document.createElement('span');
    humidity.setAttribute('class', 'res_value');
    humidity.innerText = `Humidity: ${data.main.humidity}%`;
    right.appendChild(humidity);

    const pressure = document.createElement('span');
    pressure.setAttribute('class', 'res_value');
    pressure.innerText = `Pressure: ${data.main.pressure} hPa`;
    right.appendChild(pressure);
  };

  return {
    displaySearch,
    displayResults,
  };
};

export default displayController;