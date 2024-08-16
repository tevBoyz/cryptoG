var quotes = {
    "Franklin D. Roosevelt": "The only thing we have to fear is fear itself.",
    "Robert Frost": "In three words I can sum up everything I've learned about life: it goes on.",
    "Mahatma Gandhi": "Be the change that you wish to see in the world.",
    "Winston Churchill": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Martin Luther King Jr.": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "Ralph Waldo Emerson": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "Peter Drucker": "The best way to predict the future is to create it.",
    "René Descartes": "I think, therefore I am.",
    "George Eliot": "It is never too late to be what you might have been.",
    "Albert Einstein": "Imagination is more important than knowledge.",
    "Oscar Wilde": "Be yourself; everyone else is already taken.",
    "Mark Twain": "The secret of getting ahead is getting started.",
    "Nelson Mandela": "It always seems impossible until it’s done.",
    "Henry David Thoreau": "Go confidently in the direction of your dreams! Live the life you've imagined.",
    "Mother Teresa": "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    "Aristotle": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "Friedrich Nietzsche": "He who has a why to live can bear almost any how.",
    "Confucius": "It does not matter how slowly you go as long as you do not stop.",
    "Eleanor Roosevelt": "No one can make you feel inferior without your consent.",
    "Steve Jobs": "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    "William Shakespeare": "All the world's a stage, and all the men and women merely players.",
    "Helen Keller": "The only thing worse than being blind is having sight but no vision.",
    "John F. Kennedy": "Ask not what your country can do for you; ask what you can do for your country.",
    "Buddha": "The mind is everything. What you think you become.",
    "Maya Angelou": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    "Benjamin Franklin": "An investment in knowledge pays the best interest.",
    "Charles Darwin": "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
    "Leonardo da Vinci": "Simplicity is the ultimate sophistication.",
    "Confucius": "Our greatest glory is not in never falling, but in rising every time we fall.",
    "C.S. Lewis": "You are never too old to set another goal or to dream a new dream.",
    "Isaac Newton": "If I have seen further it is by standing on the shoulders of giants.",
    "Vince Lombardi": "The only place where success comes before work is in the dictionary.",
    "Henry Ford": "Whether you think you can or you think you can’t, you’re right.",
    "Albert Camus": "In the depth of winter, I finally learned that within me there lay an invincible summer.",
    "Pablo Picasso": "Every child is an artist. The problem is how to remain an artist once we grow up.",
    "J.K. Rowling": "It is our choices, that show what we truly are, far more than our abilities.",
    "Anne Frank": "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    "Walt Disney": "The way to get started is to quit talking and begin doing.",
    "Voltaire": "I disapprove of what you say, but I will defend to the death your right to say it.",
    "John Lennon": "Life is what happens when you're busy making other plans.",
    "Marie Curie": "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    "Ralph Waldo Emerson": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "Henry David Thoreau": "The price of anything is the amount of life you exchange for it.",
    "Jane Austen": "There is no charm equal to tenderness of heart.",
    "George Bernard Shaw": "Life isn't about finding yourself. Life is about creating yourself.",
    "Theodore Roosevelt": "Do what you can, with what you have, where you are.",
    "Marcus Aurelius": "The happiness of your life depends upon the quality of your thoughts.",
    "Mahatma Gandhi": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "Oprah Winfrey": "The biggest adventure you can take is to live the life of your dreams.",
    "F. Scott Fitzgerald": "The test of a first-rate intelligence is the ability to hold two opposed ideas in mind at the same time and still retain the ability to function.",
    "Albert Einstein": "Try not to become a man of success, but rather try to become a man of value.",
    "George Washington": "It is better to be alone than in bad company.",
    "Thomas Jefferson": "Honesty is the first chapter in the book of wisdom.",
    "Blaise Pascal": "All of humanity's problems stem from man's inability to sit quietly in a room alone.",
    "Plato": "Wise men speak because they have something to say; fools because they have to say something.",
    "H.L. Mencken": "For every complex problem, there is an answer that is clear, simple, and wrong.",
    "Vincent Van Gogh": "I dream my painting and I paint my dream.",
    "Ayn Rand": "The question isn't who is going to let me; it's who is going to stop me.",
    "Immanuel Kant": "Science is organized knowledge. Wisdom is organized life.",
    "Nelson Mandela": "Education is the most powerful weapon which you can use to change the world.",
    "Stephen Hawking": "Intelligence is the ability to adapt to change.",
    "Leonardo da Vinci": "Learning never exhausts the mind.",
    "Socrates": "The only true wisdom is in knowing you know nothing.",
    "Abraham Lincoln": "Whatever you are, be a good one.",
    "Albert Schweitzer": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "Isaac Asimov": "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
    "Martin Luther King Jr.": "The time is always right to do what is right.",
    "Maya Angelou": "If you don't like something, change it. If you can't change it, change your attitude.",
    "Eleanor Roosevelt": "Do one thing every day that scares you.",
    "Helen Keller": "Alone we can do so little; together we can do so much.",
    "Buddha": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "William James": "The greatest discovery of any generation is that a human being can alter his life by altering his attitude.",
    "Steve Jobs": "Innovation distinguishes between a leader and a follower.",
    "Ernest Hemingway": "Courage is grace under pressure.",
    "Victor Hugo": "Music expresses that which cannot be said and on which it is impossible to be silent.",
    "Stephen King": "Get busy living or get busy dying.",
    "Socrates": "An unexamined life is not worth living.",
    "George Orwell": "In a time of deceit telling the truth is a revolutionary act.",
    "Marilyn Monroe": "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
    "Friedrich Nietzsche": "That which does not kill us makes us stronger.",
    "Sigmund Freud": "Unexpressed emotions will never die. They are buried alive and will come forth later in uglier ways.",
    "Thomas Jefferson": "I cannot live without books.",
    "Dalai Lama": "Happiness is not something ready made. It comes from your own actions.",
    "Confucius": "Wherever you go, go with all your heart.",
    "Winston Churchill": "If you're going through hell, keep going.",
    "Lao Tzu": "The journey of a thousand miles begins with one step.",
    "Benjamin Franklin": "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "Mark Twain": "The two most important days in your life are the day you are born and the day you find out why.",
    "Oscar Wilde": "To live is the rarest thing in the world. Most people exist, that is all."
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

var encryptor = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var currentCharQuote = [];
var playingQuote;

var currentQuote;
var currentAuthor;

var currentID = -1;

function getQuote(){
    let keys = Object.keys(quotes);
    key = keys[Math.floor(Math.random()*keys.length)];
    return quotes[key];
}

function startGame(){
    var currentQuote = getQuote().toUpperCase();
    //  currentQuote = "Simplicity is the ultimate sophistication.";
    //  currentQuote = currentQuote.toUpperCase()
    currentAuthor = key;
    
    shuffleEncryptor();

    authorContainer.innerHTML = "<span>Author: </span>" + currentAuthor;

    currentCharQuote = currentQuote.split('');
    playingQuote = Array(currentCharQuote.length).fill(0);

    console.log(currentCharQuote, playingQuote)

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