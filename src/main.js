import 'regenerator-runtime';
import mainNav from './scripts/view/nav.js';
import regSW from './scripts/view/regSW.js';
import swal from 'sweetalert';

// materialize dependency
import 'materialize-css/dist/js/materialize.js';
import './style/style.css';

regSW();
  //load document
document.addEventListener("DOMContentLoaded", mainNav);