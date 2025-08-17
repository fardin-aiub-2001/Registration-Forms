let valid=false;
let fnam=document.getElementById("fn");
let fnamerr=document.getElementById("fner");
let lnam=document.getElementById("ln");
let lnamerr=document.getElementById("lner");
let phone=document.getElementById("pnum");
let phoneerr=document.getElementById("pnumerr");
let eml=document.getElementById("email");
let emlerr=document.getElementById("eerr");
let password=document.getElementById("pass");
let passworderr=document.getElementById("passerr");
let confirmpassword=document.getElementById("conpass");
let confirmpassworderr=document.getElementById("conpasserr");
let regex=/^(?:\+880|880|0)1[3-9]\d{8}$/;
let emregex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let mal=document.getElementById("male");
let fmal=document.getElementById("female");
let generr=document.getElementById("gerr");
let gender;
let db=document.getElementById("dob");
let dberr=document.getElementById("doberr");

//checkbox elements
let c=document.getElementById("cplain");
let cs=document.getElementById("csh");
let hh=document.getElementById("html");
let jv=document.getElementById("java");
let sub=document.getElementById("suberr");
let subject="";

password.addEventListener("input",verify);
    function verify(){
        if(password.value.length<8){
            passworderr.innerHTML="Password is too small";
        }
        else if(password.value.length>10){
            passworderr.innerHTML="Password is too large to memorise";
        }
        else{
            passworderr.innerHTML="";
        }
    }
    confirmpassword.addEventListener("input",match);
    function match(){
        if(password.value.trim()===confirmpassword.value.trim()){
            confirmpassworderr.innerHTML="";
        }
        else{
            confirmpassworderr.innerHTML="Password Didn't match";
        }
    }


function validation(){
    valid=true;
    if(fnam.value.trim()===""){
        fnamerr.innerHTML="This Field Cannot be Empty";
        valid=false;
    }
    else{
        fnamerr.innerHTML="";
    }

    if(lnam.value.trim()===""){
        lnamerr.innerHTML="This Field Cannot be Empty";
        valid=false;
    }
    else{
        lnamerr.innerHTML="";
    }

    if(phone.value.trim()==""){
        phoneerr.innerHTML="This Field Cannot be Empty";
        valid=false;
    }
    else if(!regex.test(phone.value.trim())){
        phoneerr.innerHTML="Enter Valid Phonenumber";
        valid=false;
    }

    if(eml.value.trim()===""){
        emlerr.innerHTML="This Field Cannot be Empty";
        valid=false;
    }
    else if(!emregex.test(eml.value.trim())){
        emlerr.innerHTML="Your email should be in someone@exm.exm form";
        valid=false;
    }
    else{
        emlerr.innerHTML="";
    }

    if(mal.checked || fmal.checked){
        if(mal.checked){
            gender="Male";
        }
        else{
            gender="Female";
        }
        generr.innerHTML="";
    }
    else{
        generr.innerHTML="Choose Your Gender To Continue";
        valid=false;
    }

    if(db.value.trim()===""){
        dberr.innerHTML="Choose Your Birth-date";
        valid=false;
    }
    else{
        dberr.innerHTML="";
    }
    if(c.checked ||cs.checked || jv.checked || hh.checked){
        if(c.checked){
            subject=subject+"C  ";
        }
        else if(cs.checked){
            subject=subject+"C#  ";
        }
        else if(jv.checked){
            subject=subject+"Java  ";
        }
        else if(hh.checked){
            subject=subject+"HTML  ";
        }
        sub.innerHTML="";
    }
    else{
        sub.innerHTML="Choose your Favourite Language/s";
        valid=false;
    }


    if(valid){
        alert(
            "First name: " + fnam.value +
            "\nLast name: " + lnam.value +
            "\nPhone: " + phone.value +
            "\nEmail: " + eml.value +
            "\nGender: " + gender +
            "\nDOB: " + db.value +
            "\nSubjects: " + subject
        );
        return valid;
    }
    else{
        return valid;
    }
}