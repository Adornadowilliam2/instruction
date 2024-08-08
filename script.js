let card_container = document.querySelector(".card-container");
let button = document.createElement("button");
button.innerText = "Electron code";
card_container.appendChild(button);
button.setAttribute("onclick", "pressed()");
function pressed() {
  card_container.innerHTML = main;
}
function pressed2() {
  card_container.innerHTML = preload;
}
function pressed3() {
  card_container.innerHTML = `
  <h1 style='color:blue'>Summary on how to convert the react + vite to electron</h1>
    <h2>1.) First you need to create a react + vite project if you don't have one</h2>
    <p><mark>${arr[2]}</mark></p>  
    <h2>2.) After you do that you have to go to the folder you name</h2>
    <p><mark>${arr[3]}</mark></p>  
    <h2>3.) Then install the node_modules using this commamnd</h2>
    <p><mark>${arr[1]}</mark></p>  
    <h2>4.) Then install this for electron</h2>
    <p><mark>${arr[4]}</mark></p> 
    <p><mark>${arr[5]}</mark></p> 
    <h2>5.) Create a 'electron' folder</h2>
    <h2>6.) Then inside the electron folder is the main.js, and you have to copy and paste it this code: <br>, And the preload.js which you will see the code if you press the button</h2>
    <p><mark>${main}</mark></p> 
    <h2>7.) Then ask you can ask some professional where do you need to put this: </h2>
    <p><mark> "main": "electron/main.js", <br>     "start": "electron .",
    "start:dev": "concurrently \"vite\" \"electron .\"",
    "package": "electron-builder"</mark></p> 
  `;
}
