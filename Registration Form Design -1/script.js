
let button=document.getElementById("submit");
button.addEventListener("click", function(e) {
    if (!validation()) {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});

let nam=document.getElementById("name");
let nameerr=document.getElementById("nameerr");

let id=document.getElementById("stuid");
let iderr=document.getElementById("iderr");
let idregex = /^(1[8-9]|2[0-5])-\d+-[1-3]$/;

let cgg=document.getElementById("cgpa");
let cgerr=document.getElementById("cgpaerr");

let maleRB=document.getElementById("male");
let femaleRB=document.getElementById("female");
let generr=document.getElementById("gendererr");

let dob=document.getElementById("dob");
let doberr=document.getElementById("doberr");

let selectedGender="";

let dep=document.getElementById("dept");
let deperr=document.getElementById("depterr");

function validation(){
    let valid=true;

    if(nam.value.trim()===""){
        nameerr.style.color="red";
        nameerr.innerHTML="Enter Your Name To Submit...";
        valid=false;
    }
    else{
        nameerr.innerHTML = "";
    }

    if(idregex.test(id.value.trim()) == false){
        iderr.style.color="red";
        iderr.innerHTML="Enter Valid Id";
        valid=false;
    }
    else{
        iderr.innerHTML="";
    }
    let cg=parseFloat(cgg.value.trim());
    if(cg<=4 && cg>=0){
        cgerr.innerHTML="";
    }
    else{
        cgerr.style.color="red";
        cgerr.innerHTML="Enter Valid Cgpa";
        valid=false;
    }

    if(maleRB.checked || femaleRB.checked)
    {
        
        if(maleRB.checked)
        {
            selectedGender=maleRB.value;
        }
        else
        {
            selectedGender=femaleRB.value;
        }
    }
    else
    {
        
        generr.innerHTML = "Please select a gender";
        generr.style.color = "red";
        valid=false;

    }
    if(dob.value===""){
    doberr.style.color="red";
    doberr.innerHTML="Please enter your date of birth";
    valid=false;
    } 
    else{
        doberr.innerHTML="";
    }

    if(dep.value===""){
        deperr.style.color="red";
        deperr.innerHTML="Select one Department";
        valid=false;
    }
    else{
        deperr.innerHTML="";
    }

    if(valid==true){
    alert("Name: "+nam.value+"\n" +
      "Id: "+id.value+"\n" +
      "CGPA: "+cg+"\n" +
      "Gender: "+selectedGender+"\n" +
      "Department: "+dep.value+"\n" +
      "Date of Birth: "+dob.value);
    }
    return valid;
}
