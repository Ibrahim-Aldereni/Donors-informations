'use strict';
/****************** inilize ************************************** */

let table = document.getElementById('table');

let headArr =[];
let th = null;
let td = null;
let DonorName='';
let amount='';
let sum = 0 ;
/********************** template ****************************/

function Donor(name,amount,age){

  this.name = name;
  this.amount = amount;
  this.age = age;
  this.total = 0;

  Donor.allDonors.push(this);
}

Donor.allDonors = [];

/************************** form *******************************/

let form = document.getElementById('form');

form.addEventListener('submit',function (e){
  e.preventDefault();

  DonorName = e.target.name.value;
  amount = e.target.select.value;
  total(amount);
 
  new Donor(DonorName,amount,generateRandom()).render();
  saveToLs();
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
  getLs();
  for(let i=0; i<Donor.allDonors.length;i++){
    Donor.allDonors[i].render();
  }
}
callRender() 


// total function


function total(amount){
  sum = sum + parseInt(amount); 
  saveTotalLs();
  let totalPara = document.getElementById('total');

  totalPara.textContent = `Total = ${sum}`;
}
getLsTotal();
total(0)


/*************************** local storage *******************************/

function saveToLs() { 
  localStorage.setItem('donors',JSON.stringify(Donor.allDonors));
}

function getLs() { 

  let data = JSON.parse(localStorage.getItem('donors'));

  if(data){
    Donor.allDonors = [];
    for(let i=0; i<data.length;i++){
      new Donor(data[i].name,data[i].amount,data[i].age);
    }
  }
}


// save total 

function saveTotalLs() { 
  localStorage.setItem('total',JSON.stringify(sum));
}

function getLsTotal() { 

  let data = JSON.parse(localStorage.getItem('total'));

  if(data){
    sum = data;
  }
}
