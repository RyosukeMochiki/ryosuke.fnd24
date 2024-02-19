'use strict'

const allMochiMenu = [
  {
    Number: "001",
    Menuname: "ラザニア",
    Chef: "mama",
    Type: "fob",
    Forb: "Meat",
    About: "Good tast", 
    Time: "harfday",
    Picture: "pictures/raza.jpeg",
  },
  {
    Number: "002",
    Menuname: "カレー",
    Chef: "mamapapa",
    Type: "maindish",
    Forb: "Meat",
    About: "Good tast", 
    Time: "1h",
    Picture: "pictures/carry.jpg",
  },
  {
    Number: "003",
    Menuname: "タコライス",
    Chef: "papa",
    Type: "maindish",
    Forb: "Meat",
    About: "Good tast", 
    Time: "30min",
    Picture: "pictures/tacos.jpeg",
  },
  {
    Number: "004",
    Menuname: "きんぴら",
    Chef: "mama",
    Type: "sidedish",
    Forb: "",
    About: "Good tast", 
    Time: "30min",
    Picture: "pictures/kin.jpg",
  },
]

for ( let i = 0 ; i < allMochiMenu.length ; i++){
  localStorage.setItem(allMochiMenu[i].Number,JSON.stringify(allMochiMenu[i]))
}

const newlist = [];
for ( let num = 1; num < 1000 ; num++){
  const numcount = ('000' + num).slice(-3);
  if ( localStorage.hasOwnProperty(numcount)){
    newlist.push(JSON.parse(localStorage.getItem(numcount)));
  }else{
    break;
  }
}
