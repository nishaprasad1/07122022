function myFunction(a,b,c)
{
    var amount=document.getElementById('x1').value;
    var year=document.getElementById('x2').value;
    var rate=document.getElementById('x3').value;



    if(amount==""|| year==""||rate=="")
    {
        alert ("please Pass All Value ")
    }
    else
    {
        amt=parseInt(amount);
        yr=parseInt(year);
        r=parseFloat(rate);
        
        var openingBalance=amt;
         var x="";
        for(var i=1;i<=yr;i++)
        {
            var r1=r/12/100;

            var emitobePaid=(Math.round(amt*r1*((1+r1)^(yr*12))/(((1+r1)^(yr*12))-1)))*12;
            principalPaid=Math.round(emitobePaid*0.2);
            interestPaidYearly=Math.round(emitobePaid*0.8);
            closingBalance=openingBalance-principalPaid;
            principalPaid=Math.round(closingBalance*0.2);
            interestPaidYearly=Math.round(closingBalance*0.8);

            var closingBalance=(Math.round(amt*r1*((1+r1)^(i*12))/(((1+r1)^(i*12))-1)))*12;
           
        

            console.log(emitobePaid);
            x=x+`
            <tr>
            <td>${i}</td>
            <td>${openingBalance}</td>
            <td>${emitobePaid}</td>
            <td>${interestPaidYearly}</td>
            <td>${principalPaid}</td>
            <td>${closingBalance}</td>

            </tr>
            `
            openingBalance=closingBalance;

        }
         console.log(x);
        console.log(document.getElementById("result"));
        document.getElementById("result").innerHTML=x

    }
    
}