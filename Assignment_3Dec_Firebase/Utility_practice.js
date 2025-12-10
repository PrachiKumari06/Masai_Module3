// this file will be module and we will reuse it and call in practice.js
// EXAMPLE OF EXOORT AND IMPORT IT IN PRACTICE.JS
// there is another : as DEFAULT WE KEEP AFTER EXPORT : export default function hi(){return "h1"}
// in deafult we can only call one function,variable at a time not more that one in practice.js unlike the export : import hi from './Utility_practice.js' and then console.log(hi())

/*1.LEARN ABOUT NAMED AND DEFAULT 
export  let PI=3.14;

export function getCircum(num){
return 2*PI*num;
}
export function getArea(num){
return PI*num*num;
}
export function getVolume(num){
return 4*PI*num*num;
}
*/

// 2.using navbar as example
export function navbar(){
   return `<nav style="background-color: purple; color: white; padding: 10px; margin: 5px; border-radius: 20px;">
    <a href="practice.html" style="margin: 10px;  color:white; text-decoration:none">Home</a>
        <a href="about.html" style="margin: 10px;  color:white; text-decoration:none">About</a>
    <a href="#" style="margin: 10px;  color:white; text-decoration:none">Contact Us</a>
</nav>` 
}
