import displayController from './displayControl';
import { controller, togglebtn } from './appLogic';

displayController().navbar();
displayController().displaySearch();
controller();
togglebtn();