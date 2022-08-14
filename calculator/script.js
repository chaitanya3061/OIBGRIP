
var output=document.getElementById("output")
function Print(ele){
    output.value+=ele;
}
function Clear(){
   output.value="";
}
function Delete(){
    output.value=output.value.slice(0,-1);
}
function calculator(){
    
    try{
       
        output.value=eval(output.value);
    }
    catch(err){
        alert("invalid")
    }
}
