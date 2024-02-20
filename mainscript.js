'use strict'

//ボタンを押したら条件に合ったメニューからランダムでメニュー名と写真を出力する関数
const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function (){
  const papachef =  document.getElementById("1").checked;
  const mamachef =  document.getElementById("2").checked;
  const foodtypeSelect = document.forms['select'].elements['example3'].value; //TYPE
  const FOBSelect = document.forms['select'].elements['example4'].value; //FoB
  let cookingTime = document.forms['select'].elements['example5'].value; //時間
  function papacheck (obj){
    if(mamachef){
      if(obj["Chef"] === "mama"){
        return obj;
      }
    }else if (papachef){
      if(obj["Chef"] === "papa"){
        return obj;
      }
    }
  }

  function type (obj){
    if (obj["Type"] === foodtypeSelect){
      return obj;
    }
  }
  function Forb (obj){
    if (obj["Forb"] === FOBSelect){
      return obj;
    }
  }
  function Time (obj){
    if (obj["Time"] === cookingTime){
      return obj;
    }
  }

  let selectmenus = newlist.filter(papacheck).filter(type).filter(Forb).filter(Time)
  console.log(selectmenus)
  if(selectmenus.length === 0){
    return alert("入力が足りないか該当のメニューはありません！")
  }

  let randam = Math.floor( Math.random() * selectmenus.length);
  document.getElementsByClassName("menulist")[0].innerHTML = '<img class="pic" src="' + selectmenus[randam].Picture + '" width="700" height="400" alt="画像がありません">'; 
  document.getElementsByClassName("menulist")[1].innerText= selectmenus[randam]["Menuname"];
  
 // 楽天API
  const url = 'https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1045612827288089180';
  const updateText = (data) => {
    let randam = Math.floor( Math.random() * data.length);
      const insertHtml = `
      <li>
      <h1>楽天レシピ オススメ<!/h1>
      <a href="${data[randam].recipeUrl}" target="_blank">
      <img id="raku" src="${data[randam].foodImageUrl}" alt="${data[randam].recipeTitle} 画像">
      </a>
      <h2>${data[randam].recipeTitle}</h2>
      <p>${data[randam].recipeDescription}</p>
      </li>
      `;
      document.getElementById("recipe_list").innerHTML = insertHtml;
  }
  
  // API取得
  $.getJSON(url, (data) => {
    const recipes = data.result;
    updateText(recipes);
  });
}
)


