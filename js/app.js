'use strict';
/****************** inilize ************************************** */

let table = document.getElementById('table');

let headArr =[];
let th = null;
let td = null;
let DonorName='';
let amount='';

/********************** template ****************************/

function Donor(name,amount,age){

  this.name = name;
  this.amount = amount;
  this.age = age;

  Donor.allDonors.push(this);
}

Donor.allDonors = [];

/************************** form *******************************/

let form = document.getElementById('form');

form.addEventListener('submit',function (e){
  e.preventDefault();

  DonorName = e.target.name.value;
  amount = e.target.select.value;

  new Donor(DonorName,amount,generateRandom()).render();

})

/************************ functions ***************************/

// random number function

function generateRandom(){
  return Math.floor(Math.random() * (30 - 18) + 18);
}

// render function
Donor.prototype.render = function (){

  let tr2 = document.createElement('tr');
  table.appendChild(tr2);

  td = document.createElement('td');
  tr2.appendChild(td);
  td.textContent = this.name;

  td = document.createElement('td');
  tr2.appendChild(td);
  td.textContent = this.age;

  td = document.createElement('td');
  tr2.appendChild(td);
  td.textContent = this.amount;

}

// header function

function HeaderRow(){

  let tr1 = document.createElement('tr');
  table.appendChild(tr1);

  headArr = ['Donor Name','Donor Age','Amount'];

  for(let i=0; i< headArr.length;i++){
    th = document.createElement('th');
    tr1.appendChild(th);
    th.textContent=headArr[i];
  }
}

HeaderRow()

// render function 

function callRender() {

  for(let i=0; i<Donor.allDonors.length;i++){
    Donor.allDonors[i].render();
  }
}
callRender() 



/*************************** local storage *******************************/