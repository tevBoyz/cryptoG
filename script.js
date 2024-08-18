var quotes = {
    "Heraclitus": "The only constant is change.",
    "William Shakespeare": "To be or not to be.",
    "René Descartes": "I think, therefore I am.",
    "Francis Bacon": "Knowledge is power.",
    "Socrates": "The unexamined life is not worth living.",
    "Alexander Pope": "To err is human; to forgive, divine.",
    "Julius Caesar": "I came, I saw, I conquered.",
    "Albert Einstein": "In the middle of difficulty lies opportunity.",
    "Friedrich Nietzsche": "That which does not kill us makes us stronger.",
    "Virgil": "Fortune favors the brave.",
    "Benjamin Franklin": "Time is money.",
    "Ludwig Mies van der Rohe": "Less is more.",
    "Unknown": "Actions speak louder than words.",
    "Lord Acton": "Power corrupts; absolute power corrupts absolutely.",
    "Mahatma Gandhi": "Where there is love there is life.",
    "Aristotle": "Happiness depends upon ourselves.",
    "Virgil": "The greatest wealth is health.",
    "Geoffrey Chaucer": "Time and tide wait for no man.",
    "David Viscott": "To love and be loved is to feel the sun.",
    "Socrates": "Wisdom begins in wonder.",
    "Leonardo da Vinci": "Simplicity is the ultimate sophistication.",
    "Thomas Jefferson": "All men are created equal.",
    "Patrick Henry": "Give me liberty or give me death.",
    "French Revolution Slogan": "Liberty, equality, fraternity.",
    "Marie Antoinette": "Let them eat cake.",
    "Aristotle": "A friend to all is a friend to none.",
    "William Shakespeare": "Brevity is the soul of wit.",
    "Pablo Picasso": "Good artists copy, great artists steal.",
    "Marshall McLuhan": "The medium is the message.",
    "Niccolò Machiavelli": "The end justifies the means.",
    "Edward Bulwer-Lytton": "The pen is mightier than the sword.",
    "Joseph Addison": "He who hesitates is lost.",
    "William Shakespeare": "To thine own self be true.",
    "Hippocrates": "Life is short, art long.",
    "The Beatles": "Let it be.",
    "Franklin D. Roosevelt": "The only thing we have to fear is fear itself.",
    "Martin Luther King Jr.": "I have a dream.",
    "Mahatma Gandhi": "An eye for an eye makes the world blind.",
    "Horace": "Seize the day.",
    "Lao Tzu": "A journey of a thousand miles begins with a step.",
    "Bhagavad Gita": "I am become death.",
    "Socrates": "Know thyself.",
    "Albert Einstein": "Creativity is intelligence having fun.",
    "Aristotle": "Pleasure in the job puts perfection in the work.",
    "Mahatma Gandhi": "Where there is love there is life.",
    "Confucius": "Silence is a true friend who never betrays.",
    "Benjamin Franklin": "Well done is better than well said.",
    "Henry Ford": "Failure is simply the opportunity to begin again.",
    "Oscar Wilde": "Be yourself; everyone else is taken.",
    "Mark Twain": "Age is an issue of mind over matter.",
    "Leonardo da Vinci": "Simplicity is the ultimate sophistication.",
    "Plato": "The beginning is the most important part.",
    "Lao Tzu": "The journey of a thousand miles begins with a step.",
    "Winston Churchill": "Never, never, never give up.",
    "Helen Keller": "Life is a daring adventure or nothing.",
    "Yoda": "Do or do not. There is no try.",
    "Abraham Lincoln": "Whatever you are, be a good one.",
    "Socrates": "Wisdom begins in wonder.",
    "Dalai Lama": "Be kind whenever possible. It is always possible.",
    "Maya Angelou": "Nothing can dim the light within.",
    "Albert Einstein": "Reality is merely an illusion.",
    "Mother Teresa": "Spread love everywhere you go.",
    "Buddha": "The mind is everything. What you think, you become.",
    "Seneca": "Luck is what happens when preparation meets opportunity.",
    "Thomas Edison": "Genius is one percent inspiration, ninety-nine percent perspiration.",
    "Epictetus": "Wealth consists not in having great possessions.",
    "Ralph Waldo Emerson": "The only way to have a friend is to be one.",
    "Francis Bacon": "A wise man will make more opportunities than he finds.",
    "Marcus Aurelius": "The best revenge is not to be like your enemy.",
    "George Bernard Shaw": "Life isn’t about finding yourself.",
    "Steve Jobs": "Stay hungry, stay foolish.",
    "Mark Twain": "The best way to cheer yourself is to cheer someone else.",
    "William Shakespeare": "Brevity is the soul of wit.",
    "Walt Disney": "The way to get started is to quit talking.",
    "Oscar Wilde": "Experience is the name everyone gives to their mistakes.",
    "Vince Lombardi": "Winners never quit and quitters never win.",
    "Helen Keller": "Alone we can do so little; together we can do so much.",
    "Albert Einstein": "Life is like riding a bicycle.",
    "Confucius": "It does not matter how slowly you go as long as you do not stop.",
    "Nelson Mandela": "It always seems impossible until it’s done.",
    "Rumi": "Let yourself be silently drawn by the pull of what you love.",
    "Friedrich Nietzsche": "He who has a why can bear almost any how.",
    "Epictetus": "It’s not what happens to you, but how you react.",
    "Marcus Aurelius": "You have power over your mind, not outside events.",
    "Plato": "Courage is knowing what not to fear.",
    "Seneca": "Every new beginning comes from some other beginning's end.",
    "Albert Camus": "In the depth of winter, an invincible summer.",
    "Robert Frost": "The best way out is always through.",
    "Henry David Thoreau": "Go confidently in the direction of your dreams.",
    "Arthur Ashe": "Start where you are. Use what you have. Do what you can.",
    "Lao Tzu": "He who knows, does not speak. He who speaks, does not know.",
    "Winston Churchill": "Success is not final; failure is not fatal."
}


function attachKeyboardListener(){
    let allKey = document.querySelectorAll(".key");
    allKey.forEach(key => {
        key.addEventListener("click", function(event){
            if(currentID != -1){
                var ch = event.target.id.toUpperCase();
                updateplayingQ(currentID, ch);
                if(playingQuote[currentID] == currentCharQuote[currentID])
                    hintedIndices.push(currentID);
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
var timeToSet = 300000;
var timer, timeIntervaler;

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
    startTimer();
}

function startTimer(){
    timer = setTimeout(()=>{
        showWinPopup2('Time\'s up!', 'Yor run out of time. Better luck next time!')
        clearInterval(timeIntervaler);
        clearTimeout(timer);
    }, timeToSet);

    timeIntervaler = setInterval(()=>{
        timeToSet -= 1000;
        let min =  Math.floor(timeToSet/1000/60);
        let sec = Math.floor(timeToSet/1000) % 60;

        let timeD = document.querySelector('.time')

        if(sec < 10){
            timeD.innerHTML = min + ":0" + sec
        }
        else{
            timeD.innerHTML = min + ":" + sec
        }

    },1000);
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
    
    let min =  Math.floor(timeToSet/1000/60);
    let sec = Math.floor(timeToSet/1000) % 60;
    sec = sec > 10 ? sec : '0' + sec;

    var sectext = document.querySelector('.timeDis');   
    sectext.innerHTML = min + ':' + sec;



    var authorpop = document.querySelector('.popAuth');
    var quotepop = document.querySelector('.popQuote');
    authorpop.innerHTML = currentAuthor;
    quotepop.innerHTML = currentQuote;
    clearInterval(timeIntervaler);
        clearTimeout(timer);
}

function showWinPopup2(text1, text2){
    var popup = document.querySelector('.popup');
    popup.style.display = 'block';

    var maintext = document.querySelector('.popup h1');
    var secondtext= document.querySelector('.secondtext');
    var authorpop = document.querySelector('.popAuth');
    var quotepop = document.querySelector('.popQuote');
    var cancelPopup = document.querySelector('.cancel');
    cancelPopup.style.display = 'none';

    maintext.innerHTML= text1;
    secondtext.innerHTML= text2;
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
        let box = `<div class="charbox inactive"  id='${i}' ><p class="actual" id='${i}'>${c}</p><p class="crypto" id='${i}'> </p></div>`
        quotesContainer.innerHTML += box;
    }
    else{
        let box = `<div class="charbox" id='${i}' ><p class="actual" id='${i}'></p><hr id='${i}'/><p class="crypto" id='${i}'>${crypto}</p></div>`
        quotesContainer.innerHTML += box;
    }
}

function updateBoxes(){
    quotesContainer.innerHTML = "";
    var exceptions = [' ', ',','.',':',';','’','\''];
    let box;

    for(var i = 0; i < currentCharQuote.length; i++){
        if(exceptions.includes(currentCharQuote[i])){
            box = `<div class="charbox inactive"  id='${i}' ><p class="actual" id='${i}'>${currentCharQuote[i]}</p><p class="crypto" id='${i}'> </p></div>`
        }
        else{
        if(playingQuote[i] == 0){
            box = `<div class="charbox" id='${i}' ><p class="actual" id='${i}'> </p><hr id='${i}'/><p class="crypto" id='${i}'>${encryptChar(currentCharQuote[i])}</p></div>`;
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
        if(playingQuote[currentID] == currentCharQuote[currentID])
            hintedIndices.push(currentID);
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
    var hintTio = document.querySelector(".hinttooltip");
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
                hintTio.innerHTML = hints +  " hints"
            }
        }
        else{
            var answer = confirm("You have no more hints available. Give up?");
            if(answer){
                showWinPopup2('Failed!', 'Better luck next time!');
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

var hintIm = document.querySelector('.hint i');
var hintTio = document.querySelector(".hinttooltip");
hint.addEventListener('mouseover',()=>{
    hintIm.style.display = 'none';
    hintTio.style.display = 'block';
})
hint.addEventListener('mouseout',()=>{
    hintIm.style.display = 'block';
    hintTio.style.display = 'none';
})


var infoIcon = document.querySelector(".info-icon");
var infoPop = document.querySelector('.information');

infoIcon.addEventListener('click',()=>{
    if(infoPop.style.display == 'block')
    {
        infoPop.style.display = 'none'
        infoIcon.classList.remove('active-info');
    }
    else{
        infoPop.style.display = 'block';
        infoIcon.classList.add('active-info');

    }
})