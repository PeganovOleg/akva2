const numDivs = 30;
const maxHits = 14;
const pobeda  = "НИ ОДНОГО ПРОМАХА! ПРИЗ уже почти ваш!"

let hits = 0;
let hits2 = 0;
let firstHitTime = 0;
let Promah=0;
let Promah2=" промахов((";
let Promah3="Вы сделали ";
let Promah4="ПРОМАХИ НЕДОПУСТИМЫ!";
let Sekundy=0;
let bitoeserdce=0;
let schetchik=0;
let sluchainoeChislo=0;



function round() {

  //resetRedirectionDelay();
  schetchik+=1;

if (sluchainoeChislo===schetchik)
  {

$('.target').removeClass('target');
//$('.miss').removeClass('miss');


 
  
  let divSelector = randomDivId();
  console.log(divSelector);
  $(divSelector).removeClass('miss');
  $(divSelector).addClass("target2");
   $(divSelector).text(hits + 1);
    soundClick();

  }

  else{
    $('.target').removeClass('target');

$('.target2').removeClass('target2');
//$('.miss').removeClass('miss');
//$('.miss').removeClass('miss');


 
  
  let divSelector = randomDivId();
  console.log(divSelector);
  // $(divSelector).removeClass('target2');
  $(divSelector).removeClass('miss');
  $(divSelector).addClass("target");
   $(divSelector).text(hits + 1);
    soundClick();}





   

}


function endGame() {
   


  
  $('.game-field').hide();

  let totalPlayedMillis = getTimestamp() - firstHitTime;
   console.log(totalPlayedMillis);
  let totalPlayedSeconds = Number(totalPlayedMillis/1000).toPrecision(3);

if (Promah===0) 
  { 
  // $("#promah-played-non").text(pobeda);
  }
  else {

   $("#promah-played3").text(Promah3);
   $("#promah-played").text(Promah);
   $("#promah-played2").text(Promah2);
   $("#promah-played4").text(Promah4);
 }

  

  $("#total-time-played").text(hits);
  $("#total-time-played2").text(hits2);



  $("#total-time-played12").hide();
$("#total-time-played13").hide();
$("#total-time-played14").hide();
$("#total-time-played15").hide();


  $("#button-reload").removeClass("d-none");
  $("#win-message").removeClass("d-none");

$("#win-message2").removeClass("d-none");
soundClick3() ;
 clearTimeout(redirectionDelay);

}



function handleClick(event) {


  if ($(event).hasClass("target2")) { 
    soundClick();
    hits2=0;
    //$('.seconds').text(hits2);
bitoeserdce=1;
    endGame() 
  }
 

 if ($(event).hasClass("target")) { 
    soundClick();
    hits2=hits2+1;
  }
  else {
    
    soundClick2();
    $(event).addClass('miss'); 

    if (hits2>0){
     hits2=hits2-1;
    }
 
  }
 
  

$("#total-time-played2").text(hits2);

}

function soundClick() {
  var audio1 = new Audio(); // Создаём новый элемент Audio
  audio1.src = 'bul2.mp3'; // Указываем путь к звуку "клика"
  audio1.autoplay = true; // Автоматически запускаем
//new Audio('bul2.mp3').play()
}

//new Audio('./file.mp3').play()

function soundClick2() {
  var audio2 = new Audio(); // Создаём новый элемент Audio
  audio2.src = 'glass.mp3'; // Указываем путь к звуку "клика"
  audio2.autoplay = true; // Автоматически запускаем
}
function soundClick3() {
  var audio3 = new Audio(); // Создаём новый элемент Audio
  audio3.src = 'happy.mp3'; // Указываем путь к звуку "клика"
  audio3.autoplay = true; // Автоматически запускаем
}




function startRedirectionDelay(){

console.log(Sekundy);
if (Sekundy===0){
  redirectionDelay = setTimeout(init2, 950);
} 
    
if (Sekundy>0&&Sekundy<6){
  console.log("третий");
  redirectionDelay = setTimeout(init2, 700);
}
   
   if (Sekundy>5&&Sekundy<11){
    console.log("второй");
  redirectionDelay = setTimeout(init2, 850);
} 

 if (Sekundy>10){
  console.log("первый");
  redirectionDelay = setTimeout(init2, 950);
} 

}

function startRedirectionDelay2(){
console.log(Sekundy);

if (Sekundy===0){
  redirectionDelay = setTimeout(init2, 950);
} 

  if (Sekundy>0&&Sekundy<6){
  redirectionDelay = setTimeout(init2, 700);
}
   
   if (Sekundy>5&&Sekundy<11){
  redirectionDelay = setTimeout(init2, 800);
} 

 if (Sekundy>10){
  redirectionDelay = setTimeout(init2, 950);
} 
   


   // redirectionDelay = setTimeout(init2, 750);
}



function resetRedirectionDelay(){
    clearTimeout(redirectionDelay);
    startRedirectionDelay()
}

function resetRedirectionDelay2(){
    clearTimeout(redirectionDelay);
   
}

function resetRedirectionDelay4(){
    clearTimeout(redirectionDelay);
   
}





function init2() {

  hits = hits + 1;

$('.target').text('');
$('.target2').text('');
  
  round();
  resetRedirectionDelay()

}



function init3() {

  //hits = hits + 1;

$('.target').text('');
$('.target2').text('');
  
  round();
  startRedirectionDelay2()

}






function init() {




var _Seconds = $('.seconds').text(),
  int;
int = setInterval(function() { // запускаем интервал
  if (_Seconds > 0&&bitoeserdce===0) {
    _Seconds--; // вычитаем 1
    Sekundy=_Seconds;
 //   console.log(Sekundy);
    $('.seconds').text(_Seconds); // выводим получившееся значение в блок
  } else {
    clearInterval(int); // очищаем интервал, чтобы он не продолжал работу при _Seconds = 0
    //alert('End!');
    endGame();
  }
}, 1000);

 let d = Math.floor(Math.random() *19) ;
 sluchainoeChislo=d;

 console.log(d);

startRedirectionDelay();

console.log(116);


  round();
//$(".game-field").click(handleClick);

$(".game-field").click(function(e) {
  //soundClick();

//resetRedirectionDelay2();

  handleClick(e.target);
  //soundClick();


//console.log(e.target);

//startRedirectionDelay();


});

  

  

 
// $(".game-field").on('click', function() {
//handleClick();
//console.log($(".game-field").text());
//});

  $("#button-reload").click(function() {

    location.reload();
   // soundClick3() ;
  });
}

$(document).ready(init());
//soundClick3() ;
