import report from './weatherData';

const controller = () => {
  // console.log('Inside controller');
  document.getElementById('form-submit').addEventListener('click', (event) => {
    event.preventDefault();
    // console.log('clicked submit button');
    const cityName = document.getElementById('form-text').value;
    // console.log(cityName);
    report(cityName);
  });
};

export default controller;