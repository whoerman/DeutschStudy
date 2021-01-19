 //formating the introduction card info and adding event listener
 function makeIntroCard() {
     document.getElementById("contentdiv").innerHTML = '';
     introCard =
         '<div class="card-columns mt-2"> \
        <div class="card border-secondary text-center"> \
                    <div class="card-body"> \
                        <img class="card-img-top" src="./assets/images/sprechen.jpg" alt="Card image cap"> \
                        <h4 class="text-center m-0"> Welcome to </h4> \
                        <h4 class="text-center m-0"> German Quiz! </h4> \
                    <button type="button" id="introButton" class="btn btn-warning btn-block m-1">Click Here to Start</button>\
                    </div> \
                    </div> \
                </div>';
     //placing the intro card in the content div
     document.getElementById("contentdiv").innerHTML += introCard;
     //adding the event listener to the button on the intro page
     document.getElementById("introButton").addEventListener("click", function () {
         document.getElementById("contentdiv").innerHTML = '';
         gameStart();
     });
 }

 //formating the game choice buttons and adding event listeners
 function makeGameChoiceCard() {
     document.getElementById("contentdiv").innerHTML = '';
     gameChoiceCard =
         '<div class="card-columns mt-2"> \
        <div class="card border-secondary text-center"> \
                    <div class="card-body"> \
                        <h4 class="text-center m-0"><i class="fas fa-list"></i> Which game would </h4> \
                        <h4 class="text-center m-0"> you like to play? </h4> \
                        <button type="button" id="sentenceFlashButton" class="btn btn-dark btn-block m-1 animate__animated animate__fadeInTopRight"><i class="fas fa-pen-alt"></i> Sentence Flash Cards</button>\
                        <button type="button" id="nameThatNounButton" class="btn btn-warning btn-block m-1 animate__animated animate__fadeInTopLeft"><i class="fas fa-globe-africa"></i> Name that Noun</button>\
                        <button type="button" id="nounGenderButton" class="btn btn-danger btn-block m-1 animate__animated animate__fadeInBottomLeft"><i class="fas fa-venus-mars"></i> Noun Genders</button>\
                    </div> \
                    </div> \
                </div>';
     //placing the intro card in the content div
     document.getElementById("contentdiv").innerHTML += gameChoiceCard;
     //adding the event listener to the button on the intro page
     document.getElementById("sentenceFlashButton").addEventListener("click", function () {
         sentenceFlashGame();
     });
     document.getElementById("nameThatNounButton").addEventListener("click", function () {
         document.getElementById("contentdiv").innerHTML = '';
         nameThatNounGame();
     });
     document.getElementById("nounGenderButton").addEventListener("click", function () {
         document.getElementById("contentdiv").innerHTML = '';
         nounGenderGame();
     });
 }









 //adding buttons for answering

 //making 4 answer buttons at the end of the card with event listeners
 function makeAnswerButtons() {
     answerOptionsCard =
         '<div>\
            <button type="button" id="answer0Button" class="btn btn-warning btn-block m-1">A: ' + answerArray[0] + '</button>\
            <button type="button" id="answer1Button" class="btn btn-warning btn-block m-1">B: ' + answerArray[1] + '</button>\
            <button type="button" id="answer2Button" class="btn btn-warning btn-block m-1">C: ' + answerArray[2] + '</button>\
            <button type="button" id="answer3Button" class="btn btn-warning btn-block m-1">D: ' + answerArray[3] + '</button> \
            </div>';
 }

 //adding event listeners once the answer buttons are made
 function addAnswerListeners() {
     document.getElementById("answer0Button").addEventListener("click", function () {
         chosenAnswer = answerArray[0];
         processResult();
     });
     document.getElementById("answer1Button").addEventListener("click", function () {
         chosenAnswer = answerArray[1];
         processResult();
     });
     document.getElementById("answer2Button").addEventListener("click", function () {
         chosenAnswer = answerArray[2];
         processResult();
     });
     document.getElementById("answer3Button").addEventListener("click", function () {
         chosenAnswer = answerArray[3];
         processResult();
     });
 }