"use strict";

    //zgody
    var allAgreements = document.querySelector("#wszystkie-zgody");
    var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
    
    function checkboxState(state)
    {
        for(var i=0;i<allCheckboxes.length-1;i++)
        {
            allCheckboxes[i].checked=state;
            allCheckboxes[i].disabled=state;
        }
    }

    allAgreements.onchange = (function()
    {
        //console.log(allAgreements.checked);
        checkboxState(allAgreements.checked);
        
    });

/*
    var checkall=document.getElementById("wszystkie-zgody");
    check.addEventListener("click", checkall);


function checkall()
{
    if(checkall.checked==true)
    {
        zgoda1.checked=true;
        zgoda2.checked=true;
        
        zgoda1.disabled=true;
        zgoda2.disabled=true;
    }
    if(checkall.checked==false)
    {
        zgoda1.checked=false;
        zgoda2.checked=false;
        
        zgoda1.disabled=false;
        zgoda2.disabled=false;       
    } 
}*/

function walidacja(event)
{
    var errorname=document.getElementsByTagName("span")[0];
    var erroremail=document.getElementsByTagName("span")[1];
    var zgoda1=document.getElementsByTagName("span")[2];
    var zgoda2=document.getElementsByTagName("span")[3];
    
    console.log(erroremail);
    
    errorname.innerHTML="";
    erroremail.innerHTML="";
    
    errorcheck1.innerHTML="";
    errorcheck2.innerHTML="";
    
    var input=document.getElementsByTagName("input");
    
    if(input[0].value==="")
    {
        event.preventDefault();
        errorname.innerHTML="Nie wpisałeś imienia i nazwiska";
    }
    if(input[1].value=="")
    {
        event.preventDefault(); //Zatrzymuje wysłanie formularza
        erroremail.innerHTML="Wpisz adres e-mail";
    }
    
    if(input[3].checked==false)
    {    
        errorcheck1.innerHTML="Zaznacz checkbox";
    }
    
    if(input[4].checked==false)
    {
        errorcheck2.innerHTML="Zaznacz checkbox";
    }
}

