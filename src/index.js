import {sayHello} from "./functionScript";
import "./style.css";
import logo from '../img/snackbar-logo.png';  // Import de l'image

const imgElement = document.createElement('img');
imgElement.src = logo;  // Utilisation de l'image importée

document.querySelector('header').appendChild(imgElement);

sayHello();