let card_container = document.querySelector(".card-container");
let button = document.createElement("a");
let div = document.createElement("div");
div.classList.add("card");
card_container.appendChild(div);
button.innerText = "How to convert react + vite to electron";
button.style.color = "blue";
div.appendChild(button);
button.setAttribute("onclick", "pressed()");
function pressed() {
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
    <h2>7.) Then inside the electron folder is create main.js, and you have to copy and paste it this code: </h2>
    <p><mark>${main}</mark></p> 
    <h2>8.) Then also create preload.js : </h2>
    <p><mark>${preload}</mark></p> 
    <h2>8.) Then add this command : </h2>
    <p><mark>${arr[0]}</mark></p>
    <h2>10.)  Finally is to add this to package.json: </h2>
    <h3>This one must be below in the "type": module : </h2>
    <p><mark> "main": "electron/main.js"</mark></p>  
    <br>
    <h3>This one must be inside the scripts : {} </h2>
    <p><mark>"dev": "concurrently \\"vite\\" \\"electron .\\"",
    "start": "electron .",
    "start:dev": "concurrently \\"vite\\" \\"electron .\\"",
    "package": "electron-builder"</mark></p> 
  `;
}
const sakila = document.getElementById("sakila");
sakila.addEventListener("click", function () {
  sakila.innerHTML = `<p> mysql -u root -p sakila < "C:\\Users\\name\\Downloads\\sakila-db\\sakila-db\\sakila-schema.sql"</p>  <br><br><p>mysql -u root -p sakila < "C:\\Users\\name\\Downloads\\sakila-db\\sakila-db\\sakila-data.sql"</p>`;
});
