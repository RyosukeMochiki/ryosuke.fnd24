'use strict'

//ボタンを押したら条件に合ったメニューからランダムでメニュー名と写真を出力する関数

let x = document.getElementById("2").checked;
// const foodtypeSelect = document.forms['select'].elements['example3'].value; //TYPE
const FOBSelect = document.forms['select'].elements['example4'].value; //FoB
const cookingTime = document.forms['select'].elements['example5'].value; //時間

let papamamaselect;
if( document.getElementById("2").checked === true && document.getElementById("1").checked === false){
    papamamaselect = "mama";
  }else if(document.getElementById("2").checked === false && document.getElementById("1").checked === true){
    papamamaselect = "papa"
  }else if(document.getElementById("2").checked === true && document.getElementById("1").checked === true){
    papamamaselect = "mamapapa";
}

const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function (){
  let selectmenus = [];
  for(let obj of newlist){
    if(obj["Chef"] === "mama"){
      selectmenus.push(obj);
    }
  }
  let randam = Math.floor( Math.random() * selectmenus.length);
  document.getElementsByClassName("menulist")[0].innerHTML = '<img class="pic" src="' + newlist[randam].Picture + '" width="700" height="400" alt="画像がありません">'; 
  // document.getElementsByClassName("menulist")[1].innerText= selectmenus[randam]["Menuname"];
}
)