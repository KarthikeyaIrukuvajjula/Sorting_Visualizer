
//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)

var inp_as=document.getElementById('a_size'),array_size=inp_as.value; // we get arraysize from .value function  
var inp_gen=document.getElementById("a_generate");   
var inp_aspeed=document.getElementById("a_speed");
var butts_algos=document.querySelectorAll(".algos button"); // returns a nodeList of button elements and with nodelist we can access the button is clicked.

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";
var disSizeOfArray = document.getElementById("arraySize");

//Array generation and updation.


inp_gen.addEventListener("click",generate_array);    //by clicking it calls a generate_array function
inp_as.addEventListener("input",update_array_size);   //by input value it calls update array size functions

function generate_array()
{
    cont.innerHTML="";
    disSizeOfArray.innerHTML="Size Of Array : " + array_size;
    for(var i=0;i<array_size;i++)
    {

        div_sizes[i]=Math.floor(Math.random() *2*(inp_as.max - inp_as.min) ) + 4; //height of the cylinders
        divs[i]=document.createElement("div");
        divs[i].setAttribute("class","ran_values");
        divs[i].textContent = `${div_sizes[i]}`;
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:rgb(36, 87, 205); width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]*1.5) + "%;";
    }
    
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size;

//Running the appropriate algorithm.
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
    }
}

