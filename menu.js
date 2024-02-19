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
  {
    Number: "005",
    Menuname: "味噌汁",
    Chef: "mama",
    Type: "soup",
    Forb: "",
    About: "ほっと温まる", 
    Time: "30min",
    Picture: "pictures/miso.jpeg",
  },
  {
    Number: "006",
    Menuname: "青椒肉絲",
    Chef: "mama",
    Type: "fob",
    Forb: "Meat",
    About: "美味しい中華、バズレシピ", 
    Time: "1h",
    Picture: "pictures/chin.jpg",
  },
  {
    Number: "007",
    Menuname: "パエリア",
    Chef: "papa",
    Type: "maindish",
    Forb: "Fish",
    About: "Good tast", 
    Time: "1h",
    Picture: "pictures/pae.jpeg",
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

