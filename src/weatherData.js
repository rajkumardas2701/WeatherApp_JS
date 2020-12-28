const report = () => {
  fetch('http://api.openweathermap.org/data/2.5/weather?q=shimla&appid=0667f5da1705bdf0d4b3c047cf3ab568', { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      // console.log(response);
      console.log(response.main.temp_max);
      return response.main;
    })
    .catch((res) => {
      console.log(res);
    });
};

export default report;