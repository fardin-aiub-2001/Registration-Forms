let box=document.getElementById("name");
box.addEventListener("input",convert);
function convert(){
    box.value=box.value.toUpperCase();
}