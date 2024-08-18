var quotes = {
    "Franklin D. Roosevelt": "The only thing we have to fear is fear itself.",
    "Mahatma Gandhi": "Be the change that you wish to see in the world.",
    "Peter Drucker": "The best way to predict the future is to create it.",
    "René Descartes": "I think, therefore I am.",
    "George Eliot": "It is never too late to be what you might have been.",
    "Albert Einstein": "Imagination is more important than knowledge.",
    "Oscar Wilde": "Be yourself; everyone else is already taken.",
    "Mark Twain": "The secret of getting ahead is getting started.",
    "Nelson Mandela": "It always seems impossible until it’s done.",
    "Friedrich Nietzsche": "He who has a why to live can bear almost any how.",
    "Confucius": "It does not matter how slowly you go as long as you do not stop.",
    "Eleanor Roosevelt": "No one can make you feel inferior without your consent.",
    "Buddha": "The mind is everything. What you think you become.",
    "Benjamin Franklin": "An investment in knowledge pays the best interest.",
    "Leonardo da Vinci": "Simplicity is the ultimate sophistication.",
    "C.S. Lewis": "You are never too old to set another goal or to dream a new dream.",
    "Isaac Newton": "If I have seen further it is by standing on the shoulders of giants.",
    "Vince Lombardi": "The only place where success comes before work is in the dictionary.",
    "Henry Ford": "Whether you think you can or you think you can’t, you’re right.",
    "Walt Disney": "The way to get started is to quit talking and begin doing.",
    "John Lennon": "Life is what happens when you're busy making other plans.",
    "Henry David Thoreau": "The price of anything is the amount of life you exchange for it.",
    "Jane Austen": "There is no charm equal to tenderness of heart.",
    "Theodore Roosevelt": "Do what you can, with what you have, where you are.",
    "Marcus Aurelius": "The happiness of your life depends upon the quality of your thoughts.",
    "Oprah Winfrey": "The biggest adventure you can take is to live the life of your dreams.",
    "George Washington": "It is better to be alone than in bad company.",
    "Thomas Jefferson": "Honesty is the first chapter in the book of wisdom.",
    "Vincent Van Gogh": "I dream my painting and I paint my dream.",
    "Ayn Rand": "The question isn't who is going to let me; it's who is going to stop me.",
    "Immanuel Kant": "Science is organized knowledge. Wisdom is organized life.",
    "Stephen Hawking": "Intelligence is the ability to adapt to change.",
    "Leonardo da Vinci": "Learning never exhausts the mind.",
    "Socrates": "The only true wisdom is in knowing you know nothing.",
    "Abraham Lincoln": "Whatever you are, be a good one.",
    "Martin Luther King Jr.": "The time is always right to do what is right.",
    "Eleanor Roosevelt": "Do one thing every day that scares you.",
    "Helen Keller": "Alone we can do so little; together we can do so much.",
    "Steve Jobs": "Innovation distinguishes between a leader and a follower.",
    "Ernest Hemingway": "Courage is grace under pressure.",
    "Stephen King": "Get busy living or get busy dying.",
    "Socrates": "An unexamined life is not worth living.",
    "George Orwell": "In a time of deceit telling the truth is a revolutionary act.",
    "Friedrich Nietzsche": "That which does not kill us makes us stronger.",
    "Thomas Jefferson": "I cannot live without books.",
    "Confucius": "Wherever you go, go with all your heart.",
    "Winston Churchill": "If you're going through hell, keep going.",
    "Lao Tzu": "The journey of a thousand miles begins with one step.",
    "Albert Einstein": "Imagination is more important than knowledge.",
    "Mahatma Gandhi": "Be the change you wish to see in the world.",
    "Walt Disney": "If you can dream it, you can do it.",
    "Oscar Wilde": "Be yourself; everyone else is already taken.",
    "Abraham Lincoln": "Whatever you are, be a good one.",
    "Helen Keller": "Life is either a daring adventure or nothing.",
    "Socrates": "The unexamined life is not worth living.",
    "Confucius": "It does not matter how slowly you go, as long as you do not stop.",
    "Yoda": "Do, or do not. There is no try.",
    "Ralph Waldo Emerson": "The only way to have a friend is to be one.",
    "Benjamin Franklin": "Well done is better than well said.",
    "Maya Angelou": "Try to be a rainbow in someone's cloud.",
    "Dr. Seuss": "Don't cry because it's over, smile because it happened.",
    "Mark Twain": "The secret of getting ahead is getting started.",
    "Mother Teresa": "Spread love everywhere you go.",
    "William Shakespeare": "Brevity is the soul of wit.",
    "Leonardo da Vinci": "Simplicity is the ultimate sophistication.",
    "John Lennon": "Life is what happens when you're busy making other plans.",
    "Friedrich Nietzsche": "That which does not kill us makes us stronger.",
    "Buddha": "Peace comes from within. Do not seek it without."
}

function attachKeyboardListener(){
    let allKey = document.querySelectorAll(".key");
    allKey.forEach(key => {
        key.addEventListener("click", function(event){
            if(currentID != -1){
                var ch = event.target.id.toUpperCase();
                updateplayingQ(currentID, ch);
                updateBoxes();
                if(checkGame()){
                    // alert("You got it! \n The quote is: \n" + currentQuote + "\n Author: " + currentAuthor);
                    showWinPopup();
                }
                else{
                    attachListeners();
                    clearAllBoxHighlights();
                    currentID = -1;
                }
            }
        });
    });
}

function attachDeleteKeyboardListener(){
    let deleteKey = document.querySelector(".delete");
        deleteKey.addEventListener("click", function(event){
            if(currentID != -1){
                updateplayingQ(currentID, 0);
                updateBoxes();
                attachListeners();
                clearAllBoxHighlights();
                currentID = -1;
            }
        });
}

//Game code
var quotesContainer = document.querySelector('.quote');
var authorContainer = document.querySelector('.author');
let key = '';

var playingQuote;
var currentQuote;
var currentAuthor;
var currentID = -1;
var hints = 10;

var encryptor = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var hintedIndices=[];
var currentCharQuote = [];

function getQuote(){
    let keys = Object.keys(quotes);
    key = keys[Math.floor(Math.random()*keys.length)];
    return quotes[key];
}

function startGame(){
    currentQuote = getQuote().toUpperCase();
    //  currentQuote = "Simplicity is the ultimate sophistication.";
    //  currentQuote = currentQuote.toUpperCase()
    currentAuthor = key;
    
    shuffleEncryptor();

    authorContainer.innerHTML = "<span>Author: </span>" + currentAuthor;

    currentCharQuote = currentQuote.split('');
    playingQuote = Array(currentCharQuote.length).fill(0);

    console.log(currentQuote)

    for(var i = 0; i < currentCharQuote.length; i++){
        addBox(i, currentCharQuote[i], encryptChar(currentCharQuote[i]));
    }
}

function checkGame(){
    var exceptions = [' ', ',','.',';',':','’','\''];
    var status = true;
    for(var i = 0; i < currentCharQuote.length; i++){
        if(playingQuote[i] == 0){
            if(exceptions.includes(currentCharQuote[i])){
                continue;
            }
            else{
                status = false;
                break;
            }
        }
        else{
            if(playingQuote[i] == currentCharQuote[i]){
                continue;
            }
            else{
                status = false;
                break;
            }
        }
    }
    return status;
}

function showWinPopup(){
    var popup = document.querySelector('.popup');
    popup.style.display = 'block';

    var authorpop = document.querySelector('.popAuth');
    var quotepop = document.querySelector('.popQuote');
    authorpop.innerHTML = currentAuthor;
    quotepop.innerHTML = currentQuote;
}

function showWinPopup2(){
    var popup = document.querySelector('.popup');
    popup.style.display = 'block';

    var maintext = document.querySelector('.popup h1');
    var secondtext= document.querySelector('.secondtext');
    var authorpop = document.querySelector('.popAuth');
    var quotepop = document.querySelector('.popQuote');
    var cancelPopup = document.querySelector('.cancel');
    cancelPopup.style.display = 'none';

    maintext.innerHTML= 'Failed!'
    secondtext.innerHTML= 'Better luck next time!';
    authorpop.innerHTML = currentAuthor;
    quotepop.innerHTML = currentQuote;
    console.log(currentQuote)
}

function attachListeners(){
    
    var charBox = document.querySelectorAll('.charbox');
    for(var i = 0;i < charBox.length;i++){
        charBox[i].addEventListener('click', (event)=>{
            currentID = event.target.id;
            console.log(currentID);
            let box = document.getElementById("" + currentID + "");
            if(box.classList.contains('active')){
                box.classList.remove('active')
                currentID = -1;
            }
            else{
                if(!box.classList.contains('inactive')){
                    clearAllBoxHighlights();
                    highlightAllCry(encryptChar(currentCharQuote[currentID]));
                    box.classList.add('active');
                }
            }
        })
    }
}
    
startGame();
attachListeners();
attachKeyboardListener();
attachDeleteKeyboardListener()

function addBox(i, c,crypto){
    var exceptions = [' ', ',','.',';',':','’','\''];

    if(exceptions.includes(c)){
        let box = `<div class="charbox inactive"  id='${i}' ><p class="actual" id='${i}'>${c}</p></div>`
        quotesContainer.innerHTML += box;
    }
    else{
        let box = `<div class="charbox" id='${i}' ><p class="actual" id='${i}'></p><hr id='${i}'/><p class="crypto" id='${i}'>${crypto}</p></div>`
        quotesContainer.innerHTML += box;
    }
}

function updateBoxes(){
    quotesContainer.innerHTML = "";
    var exceptions = [' ', ',','.',':','’','\''];
    let box;

    for(var i = 0; i < currentCharQuote.length; i++){
        if(exceptions.includes(currentCharQuote[i])){
            box = `<div class="charbox inactive"  id='${i}' ><p class="actual" id='${i}'>${currentCharQuote[i]}</p></div>`
        }
        else{
        if(playingQuote[i] == 0){
            box = `<div class="charbox" id='${i}' ><p class="actual" id='${i}'></p><hr id='${i}'/><p class="crypto" id='${i}'>${encryptChar(currentCharQuote[i])}</p></div>`;
        }
        else if(playingQuote[i] != 0){
                box = `<div class="charbox" id='${i}' ><p class="actual" id='${i}'>${playingQuote[i]}</p><hr id='${i}'/><p class="crypto" id='${i}'>${encryptChar(currentCharQuote[i])}</p></div>`;
    }
}
        quotesContainer.innerHTML+=box;
    }
}


function encryptChar(c){
    let index = alphabet.indexOf(c);
    return encryptor[index];
}

function shuffleEncryptor(){
    encryptor = shuffleArray(encryptor);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements array[i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function highlightAllCry(cry){
    let boxes = document.querySelectorAll('.crypto');
    boxes.forEach(box =>{
        if(box.innerHTML == cry){
            var id = box.getAttribute('id');
            var b = document.getElementById(''+id+'');
            b.classList.add('active');
        }
    });
}

function clearAllBoxHighlights(){
    var charBox = document.querySelectorAll('.charbox');
    charBox.forEach(box =>{
        box.classList.remove('active');
    })

}

function updateplayingQ(index, character){
    playingQuote[index]= character;
    let crp = encryptChar(currentCharQuote[index]);
    updateAllSimilarCrypto(crp, character);
    console.log(playingQuote);
}

function updateAllSimilarCrypto(cry, ch){
    for(var i = 0;i<currentCharQuote.length;i++){
        if(encryptChar(currentCharQuote[i]) == cry){
            playingQuote[i] = ch;
        }
    }
}


var resetButton = document.getElementById('reset');
resetButton.addEventListener('click',()=>{
    playingQuote = Array(currentCharQuote.length).fill(0);
    updateBoxes();
    attachListeners();
})


//Keyboard section

document.addEventListener('keyup', (e)=>{
    var keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    if(keys.includes(e.key.toUpperCase()) && currentID != -1){
        var ch = e.key.toUpperCase();
        console.log(ch,currentID);
        updateplayingQ(currentID, ch);
        updateBoxes();
        if(checkGame()){
            //alert("You got it! \n The quote is: \n" + currentQuote + "\n Author: " + currentAuthor);
            showWinPopup();
            }
        else{
            attachListeners();
            clearAllBoxHighlights();
            currentID = -1;
            }
    }
    else if(e.key == 'Backspace' || e.key == 'Delete')
        if(currentID != -1){
            updateplayingQ(currentID, 0);
            updateBoxes();
            attachListeners();
            clearAllBoxHighlights();
            currentID = -1;
        }
    });

//popup
let newGame = document.querySelector('.restart');
newGame.addEventListener('click', ()=>{
        location.reload();
})

let news = document.querySelector('.new');
    news.addEventListener('click', ()=>{
    location.reload();
})

let cancelPopup = document.querySelector('.cancel');
   cancelPopup.addEventListener('click', ()=>{
        document.querySelector('.popup').style.display = 'none';
})

//hint section
    var hint = document.querySelector('.hint');
    hint.addEventListener('click', ()=>{
        if(hints > 0){
            var answer = confirm("You have " + hints +" hints left. Do you want to use one to reveal a letter from the puzzle?");
            if(answer){
                hints-=1;
                
                var random = selectRandomForHint();

                console.log(hints, random, hintedIndices);
                console.log(playingQuote, currentCharQuote);
                updateplayingQ(random, currentCharQuote[random]);
                updateBoxes();
                attachListeners();
                clearAllBoxHighlights();
            }
        }
        else{
            var answer = confirm("You have no more hints available. Give up?");
            if(answer){
                showWinPopup2();
            }
        }
        
})


function selectRandomForHint(){
        var random = Math.floor(Math.random() * (currentCharQuote.length -1));
        var exceptions = [' ', ',','.',';',':','’','\''];

        while(exceptions.includes(currentCharQuote[random]) || hintedIndices.includes(random)){
            random = Math.floor(Math.random() * (currentCharQuote.length - 1));
        }
        hintedIndices.push(random);

        let cry = encryptChar(currentCharQuote[random]);

        for(var i = 0;i<currentCharQuote.length;i++){
            if(encryptChar(currentCharQuote[i]) == cry){
                hintedIndices.push(i);
            }
        }

        return random;
}