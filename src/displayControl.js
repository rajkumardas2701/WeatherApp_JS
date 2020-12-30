import { getImage, temperatures } from './imgTempGenerator';
import { togglebtn } from './appLogic';

const displayController = () => {
  const content = document.getElementById('content');
  content.setAttribute('class', 'container');

  const navbar = () => {
    const nav = document.createElement('NAV');
    nav.setAttribute('class', 'navbar');
    content.appendChild(nav);

    const navText = document.createElement('h1');
    navText.setAttribute('id', 'nav-text');
    navText.innerText = 'Weather App';
    nav.appendChild(navText);
  };

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
    formText.placeholder = ' Enter City Name';
    formInput.appendChild(formText);

    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('id', 'form-submit');
    submit.innerHTML = 'Submit';
    formInput.appendChild(submit);
  };

  const clearResult = () => {
    const main = document.getElementById('result-section');
    if (main) {
      main.remove();
    }
  };

  const displayLoader = () => {
    clearResult();
    const loader = document.createElement('div');
    loader.setAttribute('id', 'loader');
    content.appendChild(loader);
  };

  const displayResults = (data, error) => {
    document.getElementById('form-text').value = '';
    const resultSection = document.createElement('div');
    resultSection.setAttribute('id', 'result-section');
    content.appendChild(resultSection);

    const loaderElement = document.getElementById('loader');

    if (error) {
      loaderElement.remove();

      const header = document.createElement('h2');
      header.setAttribute('id', 'result-header');
      header.textContent = `${data}!!!`;
      resultSection.appendChild(header);
    } else {
      loaderElement.remove();

      const header = document.createElement('h2');
      header.setAttribute('id', 'result-header');
      header.textContent = `${data.name}`;
      resultSection.appendChild(header);

      const country = document.createElement('P');
      country.setAttribute('class', 'country_value');
      country.innerText = `Country: ${data.sys.country}`;
      resultSection.appendChild(country);

      const results = document.createElement('div');
      results.setAttribute('class', 'results');
      resultSection.appendChild(results);

      const left = document.createElement('div');
      left.setAttribute('class', 'left-side');
      results.appendChild(left);

      const imgSec = document.createElement('div');
      imgSec.setAttribute('class', 'image-section');
      left.appendChild(imgSec);

      const imgText = document.createElement('p');
      imgText.setAttribute('class', 'weather_value');
      imgText.innerText = `${data.weather[0].main}`;
      imgSec.appendChild(imgText);

      const imgDesc = document.createElement('p');
      imgDesc.setAttribute('class', 'imgDesc');
      imgDesc.innerText = `${data.weather[0].description}`;
      imgSec.appendChild(imgDesc);

      const img = document.createElement('img');
      img.setAttribute('class', 'image');
      img.setAttribute('src', getImage(data.weather[0].main));
      imgSec.appendChild(img);

      const latLon = document.createElement('span');
      latLon.setAttribute('class', 'lat_value');
      latLon.innerText = `Latitude: ${data.coord.lat}°
      Longitude: ${data.coord.lon}°`;
      left.appendChild(latLon);

      const right = document.createElement('div');
      right.setAttribute('class', 'right-side');
      results.appendChild(right);

      const temp = document.createElement('span');
      temp.setAttribute('id', 'res_temp');

      const feels = document.createElement('span');
      feels.setAttribute('id', 'res_feels');

      const temp1 = [{
        kel: [data.main.temp,
          data.main.temp_min,
          data.main.temp_max,
          data.main.feels_like],
      },
      { deg: [] },
      { far: [] },
      ];
      const tempUpdated = temperatures(temp1);
      // console.log(tempUpdated);
      // document.querySelector('toggle-btn').addEventListener('click', (temp1, unit) => {

      // });

      temp.innerText = `Temperature: ${(data.main.temp - 273.15).toFixed(2)}℃ (Min: ${(data.main.temp_min - 273.15).toFixed(2)}℃ - Max: ${(data.main.temp_max - 273.15).toFixed(2)}℃)`;
      feels.innerText = `Feels Like: ${(data.main.feels_like - 273.15).toFixed(2)}℃`;

      right.appendChild(temp);
      right.appendChild(feels);

      const humidity = document.createElement('span');
      humidity.setAttribute('class', 'res_value');
      humidity.innerText = `Humidity: ${data.main.humidity}%`;
      right.appendChild(humidity);

      const pressure = document.createElement('span');
      pressure.setAttribute('class', 'res_value');
      pressure.innerText = `Pressure: ${data.main.pressure} hPa`;
      right.appendChild(pressure);

      const toggleTemp = document.createElement('input');
      toggleTemp.setAttribute('id', 'toggle-btn');
      toggleTemp.setAttribute('type', 'submit');
      toggleTemp.value = 'Toggle Temperature';
      right.appendChild(toggleTemp);
      togglebtn(toggleTemp, tempUpdated);
    }
  };

  return {
    displaySearch,
    displayResults,
    navbar,
    clearResult,
    displayLoader,
  };
};

export default displayController;