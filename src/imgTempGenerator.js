const getImage = (value) => `images/${value.toLowerCase()}.gif`;

const temperatures = (temp) => {
  for (let i = 0; i < temp[0].kel.length; i += 1) {
    (temp[1].deg).push((temp[0].kel[i] - 273.15).toFixed(2));
    (temp[2].far).push((temp[0].kel[i] * (9 / 5) - 459.67).toFixed(2));
  }
  return temp;
};

export { getImage, temperatures };