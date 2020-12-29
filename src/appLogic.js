import report from './weatherData';

const controller = () => {
  document.getElementById('form-submit').addEventListener('click', (event) => {
    event.preventDefault();
    const cityName = document.getElementById('form-text').value;
    report(cityName);
  });
};

export default controller;