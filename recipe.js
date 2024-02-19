'use strict'


const recipe = document.getElementsByClassName("recipe")[0];
recipe.addEventListener("click", function(){
  const paragraph = document.createElement("p");
  paragraph.textContent = allMochiMenu[0].Menuname;
  document.body.appendChild(paragraph);
})

let reci = "";
newlist.forEach(function (newlist){
  reci += '<div class="list">'
  reci += '<li id="number">No: '+ newlist.Number + '</li>';
  reci += '<li id="pic">' + '<img class="pic" src=' + newlist.Picture + ' width="700" height="400" alt="画像がありません">' + "</li>";
  reci += '<ul class="exam">'
  reci += '<li id="foodName">' + newlist.Menuname + '</li>';
  reci += '</ul>'
  reci += '<ul class="second">'
  reci += '<li id="chef">#' + newlist.Chef + '</li>';
  reci += '<li id="type">#' + newlist.Type + "</li>";
  reci += '<li id="fOB">#' + newlist.Forb + "</li>";
  reci += '<li id="time">#' + newlist.Time + "</li>";
  reci += '</ul>'
  reci += '<ul class="third">'
  reci += '<li id="memo">#' + newlist.About + "</li>";
  reci += '</ul>'
  reci += '</div>'
})

document.querySelector(".menuList").innerHTML = reci;