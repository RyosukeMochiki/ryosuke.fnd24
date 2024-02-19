'use strict'

//入力フォーム


let inputFile = document.getElementById('exampic');

let picname = "";
inputFile.addEventListener("change", function(e) {
  picname = e.target.files[0].name
  console.log(e.target.files[0].name)
},false);

const newobj = {};
function registration(){
  const regiName = document.getElementsByTagName("input")["recipename"].value; //料理名
  const mamaCheck = document.getElementById("mama").checked; //ママが作れるか　
  const papaCheck = document.getElementById("papa").checked; //ママが作れるか　
  const foodtype = document.forms['radio'].elements['foodtype'].value; //TYPE
  const FOB = document.forms['radio'].elements['FOB'].value; //FoB
  const cookingTime = document.getElementById("cookingTime").value; //時間
  const comment = document.getElementsByTagName("input")["comment"].value; //コメント
  const picture = "pictures/" + picname
  
  const papamamacheck = [];
  if( mamaCheck === true && papaCheck === false){
    papamamacheck.push("mama")
  }else if(mamaCheck === false && papaCheck === true){
    papamamacheck.push("papa")
  }else if(mamaCheck === true && papaCheck === true){
    papamamacheck.push("mamapapa");
  }
  
  let listNumber = newlist.length + 1;
  const listcount = ('000' + listNumber).slice(-3);
  newobj["Number"] = listcount;
  newobj["Menuname"] = regiName
  newobj["Chef"] = papamamacheck[0]
  newobj["Type"] = foodtype
  newobj["Forb"] = FOB
  newobj["Time"] = cookingTime
  newobj["Picture"] = picture
  newobj["About"] = comment
  
  localStorage.setItem(newobj.Number,JSON.stringify(newobj))
  console.log(newobj);
  location.reload();
}

const formbutton = document.getElementById("save");
formbutton.addEventListener("click", registration)


