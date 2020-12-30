import displayController from './displayControl';
import togglebtn from './appLogic';
import controller from './weatherData';

displayController().navbar();
displayController().displaySearch();
controller();
togglebtn();