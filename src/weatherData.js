import displayController from './displayControl';

const report = async (city) => {
  displayController().displayLoader();
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=83fd08105d85b9cbdd5228466d9d0385`;
  try {
    const regEx = /^[4-5][0-9][0-9]$/;
    let error = false;
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    if (regEx.test(data.cod)) {
      error = true;
      displayController().displayResults(data.message, error);
    } else {
      displayController().displayResults(data, error);
    }
    return data;
  } catch (error) {
    return error;
  }
};

const controller = () => {
  document.getElementById('form-submit').addEventListener('click', (event) => {
    event.preventDefault();
    const cityName = document.getElementById('form-text').value;
    report(cityName);
  });
};

export default controller;