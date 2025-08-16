let fn=document.getElementById("fnam");
let ln=document.getElementById("lnam");
let fer=document.getElementById("ferr");
let ler=document.getElementById("lerr");
let regex=/^[A-Za-z]{2,}$/;

let isvalid=false;

function valid(){
    isvalid=true;

    if(fn.value.trim()===""){
        fer.innerHTML="First name cannot be kept empty";
        fer.style.color="red";
        fer.style.fontWeight="bold";
        isvalid=false;
    }
    else if(!regex.test(fn.value.trim())){
        fer.innerHTML="Enter a valid name";
        fer.style.color="red";
        fer.style.fontWeight="bold";
        isvalid=false;
    }
    else{
        fer.innerHTML="";
    }

    if(ln.value.trim()===""){
        ler.innerHTML="Last name cannot be kept empty";
        ler.style.color="red";
        ler.style.fontWeight="bold";
        isvalid=false;
        
    }

    else if(!regex.test(ln.value.trim())){
        ler.innerHTML="Enter a valid name";
        ler.style.color="red";
        ler.style.fontWeight="bold";
        isvalid=false;
    }
    else{
        ler.innerHTML="";
    }

    if(isvalid){
        alert("First Name : "+fn.value+"\n"+
                "Last name : "+ln.value
        );
        return true;
    }
    else{
        return false;
    }
}
