//noun gender card game

function nounGenderGame() {
    //empty the content div
    document.getElementById("contentdiv").innerHTML = '';

    //fill in temp card until game made
    tempCard =
        '<div class="card-columns mt-2"> \
            <div class="card border-secondary text-center"> \
           <div class="card-body"> \
               <img class="card-img-sidebar float-left" src="./assets/images/derdiedas.png"> \
               <h5 class="text-center m-0"> Welcome to the</h5> \
               <h5 class="text-center m-0"> Noun Gender Quiz! </h5> \
               <button type="button" id="introButton" class="btn btn-danger btn-block m-1 animate__animated animate__bounceIn">This game is still under development...</button>\
               <button type="button" id="restartButton" class="btn btn-warning btn-block m-1">Pick a different game</button>\
           </div> \
           </div> \
       </div>';
    //placing the intro card in the content div
    document.getElementById("contentdiv").innerHTML += tempCard;
    //adding the event listener to the button on the intro page
    document.getElementById("restartButton").addEventListener("click", function () {
        makeGameChoiceCard();
    });

}