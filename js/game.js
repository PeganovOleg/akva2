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


function round() {

  //resetRedirectionDelay();

  


$('.target').removeClass('target');
//$('.miss').removeClass('miss');


 
  
  let divSelector = randomDivId();
  console.log(divSelector);
  $(divSelector).removeClass('miss');
  $(divSelector).addClass("target");
   $(divSelector).text(hits + 1);
   

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



  

  $("#win-message").removeClass("d-none");

$("#win-message2").removeClass("d-none");
soundClick3() ;

}



function handleClick(event) {
 
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
  //var audio = new Audio(); // Создаём новый элемент Audio
  //audio.src = 'bul2.mp3'; // Указываем путь к звуку "клика"
  //audio.autoplay = true; // Автоматически запускаем
new Audio('bul2.mp3').play()
}

//new Audio('./file.mp3').play()

function soundClick2() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'glass.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}
function soundClick3() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'happy.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}




function startRedirectionDelay(){
    redirectionDelay = setTimeout(init2, 850);
}
function startRedirectionDelay2(){
    redirectionDelay = setTimeout(init2, 850);
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
  
  round();
  resetRedirectionDelay()

}



function init3() {

  //hits = hits + 1;

$('.target').text('');
  
  round();
  startRedirectionDelay2()

}






function init() {


var _Seconds = $('.seconds').text(),
  int;
int = setInterval(function() { // запускаем интервал
  if (_Seconds > 0) {
    _Seconds--; // вычитаем 1
    console.log(_Seconds);
    $('.seconds').text(_Seconds); // выводим получившееся значение в блок
  } else {
    clearInterval(int); // очищаем интервал, чтобы он не продолжал работу при _Seconds = 0
    //alert('End!');
    endGame();
  }
}, 1000);


startRedirectionDelay();

console.log(116);

  round();
//$(".game-field").click(handleClick);

$(".game-field").click(function(e) {

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
  });
}

$(document).ready(init);
