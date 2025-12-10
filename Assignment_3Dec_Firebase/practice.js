// module:is external file contain reusable code
// imported into another js file
// introduced in 2015 as egma es6

/*
1.
import {PI,getArea,getCircum,getVolume} from './Utility_practice.js';
console.log(PI);
console.log(getArea(2));
console.log(getCircum(3));
console.log(getVolume(7));*/

// 2.using navbar as example
import { navbar } from "./Utility_practice.js";
// document.body.innerHTML=navbar()
document.getElementById("navbar").innerHTML = navbar();
