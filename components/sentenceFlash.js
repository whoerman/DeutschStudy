//sentence flash card game

function sentenceFlashGame() {
    //empty the content div
    document.getElementById("contentdiv").innerHTML = '';

    //fill in temp card until game made
    flashIntroCard =
        '<div class="card-columns mt-2"> \
            <div class="card border-secondary text-center"> \
                <div class="card-body"> \
                        <img class="card-img-sidebar float-left" src="./assets/images/flashcards.jpg"> \
                    <h5 class="text-center m-0"> Welcome to </h5> \
                    <h5 class="text-center m-0"> Sentence Flash Cards! </h5> \
                    <p class="text-center m-1">To have a conversation, you need to be comfortable with full sentences. In a standard flash card format, we give you a phrase and you translate it (in your head), then you click to reveal the answer. You choose: German to English or English to German. No score on this one - it is all honor system. Enjoy!</p> \
                    <button type="button" id="gameStartButton" class="btn btn-success btn-block m-1 animate__animated animate__fadeInTopRight">Start the Game</button>\
                    <button type="button" id="restartButton" class="btn btn-warning btn-block m-1 animate__animated animate__fadeInTopLeft">Pick a different game</button>\
                </div> \
           </div> \
       </div>';
    //placing the intro card in the content div
    document.getElementById("contentdiv").innerHTML += flashIntroCard;
    //adding the event listener to the button on the intro page
    document.getElementById("gameStartButton").addEventListener("click", function () {
        chooseLanguage();
    });
    document.getElementById("restartButton").addEventListener("click", function () {
        makeGameChoiceCard();
    });

};

function chooseLanguage() {
    //empty the content div
    document.getElementById("contentdiv").innerHTML = '';

    //fill in temp card until game made
    chooseLanguageCard =
        '<div class="card-columns mt-2"> \
            <div class="card border-secondary text-center"> \
                <div class="card-body"> \
                        <img class="card-img-sidebar float-left" src="./assets/images/flashcards.jpg"> \
                    <h5 class="text-center m-0"> Which Language? </h5> \
                    <p class="text-center m-1">To have a conversation, you need to be comfortable with full sentences. In a standard flash card format, we give you a phrase and you translate it (in your head), then you click to reveal the answer. You choose: German to English or English to German. No score on this one - it is all honor system. Enjoy!</p> \
                    <button type="button" id="englishButton" class="btn btn-success btn-block m-1 animate__animated animate__fadeInTopRight">English to German</button>\
                    <button type="button" id="germanButton" class="btn btn-warning btn-block m-1 animate__animated animate__fadeInTopLeft">German to English</button>\
                </div> \
           </div> \
       </div>';
    //placing the intro card in the content div
    document.getElementById("contentdiv").innerHTML += chooseLanguageCard;
    //adding the event listener to the button on the intro page
    document.getElementById("englishButton").addEventListener("click", function () {
        document.getElementById("contentdiv").innerHTML = 'English to German';
    });
    document.getElementById("germanButton").addEventListener("click", function () {
        document.getElementById("contentdiv").innerHTML = 'German to English';
    });

};

function flashCardGameStart() {
    document.getElementById("contentdiv").innerHTML = '';
    var randomSentence = sentenceArray[Math.floor(Math.random() * sentenceArray.length)];
    document.getElementById("contentdiv").innerHTML += randomSentence.German;
};