const togglebtn = (element = '', temp = '') => {
  let currentUnit = '';
  if (element) {
    document.getElementById('toggle-btn').addEventListener('click', () => {
      currentUnit = document.getElementById('res_temp').innerText;
      if (currentUnit.includes('℃')) {
        document.getElementById('res_temp').innerText = `Temperature: ${temp[2].far[0]}°F (Min: ${temp[2].far[1]}°F - Max: ${temp[2].far[2]}°F)`;
        document.getElementById('res_feels').innerText = `Feels Like: ${temp[2].far[3]}°F`;
        currentUnit = document.getElementById('res_temp').innerText;
      } else {
        document.getElementById('res_temp').innerText = `Temperature: ${temp[1].deg[0]}℃ (Min: ${temp[1].deg[1]}℃ - Max: ${temp[1].deg[2]}℃)`;
        document.getElementById('res_feels').innerText = `Feels Like: ${temp[1].deg[3]}℃`;
        currentUnit = document.getElementById('res_temp').innerText;
      }
    });
  }
};

export default togglebtn;
