let output=document.getElementById("number")
function display(num){
    output.value += num;
}
function calculate(){
    try{
        output.value = eval(output.value)
    }
    catch(err){
        alert("Invalid")
    }
}

function del(){
    output.value=output.value.slice(0,-1)
}
function Clear( ){
    
    output.value= " ";
}
