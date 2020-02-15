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

   console.log(113);


$('.target').removeClass('target');


 
  
  let divSelector = randomDivId();
  console.log(divSelector);
  $(divSelector).addClass("target");
   $(divSelector).text(hits + 1);
   

  if (hits===1) 
  { 
    firstHitTime = getTimestamp(); 
  }


  
  //if (hits === maxHits) {
  //  resetRedirectionDelay2();
  //  endGame();
    
 // }

 // startRedirectionDelay()
  
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

  

  $("#total-time-played").text(totalPlayedSeconds);
  $("#total-time-played2").text(hits2);


  

  $("#win-message").removeClass("d-none");

$("#win-message2").removeClass("d-none");

}

function handleClick(event) {


  console.log(event);

  console.log(112);

  console.log(event.target);
 
  if ($(event).hasClass("target")) { 
    hits = hits + 1;

    hits2=hits2+1;
      $('.target').text('');
    round();
  }
 // else { $(event).addClass('miss'); Promah=Promah+1;$('.target').text('');round();}

$("#total-time-played2").text(hits2);

}




function startRedirectionDelay(){
    redirectionDelay = setTimeout(init2, 1000);
}
function resetRedirectionDelay(){
    clearTimeout(redirectionDelay);
    startRedirectionDelay()
}

function resetRedirectionDelay2(){
    clearTimeout(redirectionDelay);
   
}

function init2() {
  hits = hits + 1;

$('.target').text('');
  
  round();
  startRedirectionDelay()

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


  handleClick(e.target);

resetRedirectionDelay();

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
