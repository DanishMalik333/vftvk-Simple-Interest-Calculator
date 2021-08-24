function compute()
{

    var principal = document.getElementById("principal").value;
    //Check if principle field is empty or negative
    if(principal == 0 || principal <0){
            alert("Please enter a positive number");
            document.getElementById("result").innerText = "";
            principal.focus();
            
    }
    else{
    
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);

        document.getElementById("result").innerText = "If you deposit "+ principal
            + " at an interest rate of "+ rate + "%," 
            + " You will receive an amount of " + interest
            + ", in the year "+ year;
    }   
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
      

