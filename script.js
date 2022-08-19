const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordOne = document.getElementById("password_one");
 let passwordTwo = document.getElementById("password_two");
function generate(){
    cleared();   
     for (let i=0 ; i<15 ;i++){
        let randomIndexOne = Math.floor( Math.random() * characters.length );
        passwordOne.textContent +=  characters[randomIndexOne] ;
        let randomIndexTwo = Math.floor( Math.random() * characters.length );
        passwordTwo.textContent += characters[randomIndexTwo];
    }   
}
function cleared(){
    passwordOne.textContent = "";
    passwordTwo.textContent = "";
}
//document.write
function copyPassOne(){
    let elementText = passwordOne.textContent;
    // turning the text to an input element
    let inputElement = document.createElement("input");
    inputElement.setAttribute("value",elementText);
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand("copy");
    inputElement.parentNode.removeChild(inputElement);
}
function copyPassTwo(){
    let elementText = passwordTwo.textContent;
    let inputElement = document.createElement("input");
    inputElement.setAttribute("value",elementText);
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand("copy");
    inputElement.parentNode.removeChild(inputElement);
}