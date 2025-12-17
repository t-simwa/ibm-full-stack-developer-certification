function compute()
{
    p = parseInt(document.getElementById("principal").value);
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    i = p * y * r /100;
    amount =  parseInt(p) + parseFloat(i);
    result = document.getElementById("result");

    var year = new Date().getFullYear() + parseInt(y); 

    if (p <= 0) {
        alert("Please eneter a positive number!")
        document.getElementById("principal").focus();
    }
    else {
        result.innerHTML = "If you deposit $" + "<mark>" + p + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + r + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
    }
    
}

function updateRate ()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
        