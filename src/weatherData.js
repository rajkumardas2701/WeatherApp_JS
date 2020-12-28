import displayController from './displayControl';

const report = async (city) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0667f5da1705bdf0d4b3c047cf3ab568`;
  try {
    const regEx = /^[4-5][0-9][0-9]$/;
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    if (regEx.test(data.cod)) {
      console.log(data.message);
    } else {
      // return data;
      displayController().displayResults(data);
      console.log(data);
    }
    // return data;
  } catch (error) {
    return error;
  }
};

export default report;