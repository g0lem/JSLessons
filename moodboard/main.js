import './style.css'

const savedSquaresStorageKey = 'savedColors';

document.querySelector('#app').innerHTML = `
  <div class="container"> 
    <div> 
      <h1>Input thy feels:</h1>
      <input type="text" id="simaiunic">
      <button id="unic"> click hard </button>
      <div id="savedSquares"> 
      </div>
    </div>
    <div id="squares"> 
    </div>
    </div>
  </div>
`;


const getSavedColors = () => {
  const storageString = localStorage.getItem(savedSquaresStorageKey);
  const savedColorsArray = JSON.parse(storageString);

  return savedColorsArray || [];
}

const arrayOfSquares = [
  {
    name: 'redsquare',
    tags: 'excitement, strength, love, energy',
  },
  {
    name: 'orangesquare',
    tags: 'confidence, success, bravery, sociability',
  },
  {
    name: 'yellowsquare',
    tags: 'creativity, happiness, warmth, cheer',
  },
  {
    name: 'greensquare',
    tags: 'nature, healing, freshness, quality',
  },
  {
    name: 'bluesquare',
    tags: 'trust, peace, loyalty, competence',
  },
  {
    name: 'pinksquare',
    tags: 'compassion, sincerity, sophistication, sweet',
  },
  {
    name: 'purplesquare',
    tags: 'royalty, luxury, spirituality, ambition',
  },
  {
    name: 'brownsquare',
    tags: 'dependable, rugged, trustworthy, simple',
  },
  {
    name: 'blacksquare',
    tags: 'formality, dramatic, security, darkness',
  },
  {
    name: 'whitesquare',
    tags: 'clean, simplicity, innocence, honest',
  },
];

const savedColorsArray = getSavedColors() || [];

function generateSquareDiv(square) {
  return `<div id="${square.name}" class="square ${square.name}"></div>`
}


const genericClickFunction = (square) => {
  savedColorsArray.push(square);

  const htmlString = generateSquareDiv(square);

  localStorage.setItem('savedColors', JSON.stringify(savedColorsArray));

  document.getElementById('savedSquares').innerHTML += htmlString;
}


const generateOnClickEvents = () => {
  for(let i = 0; i < arrayOfSquares.length; i++) {
    let square = arrayOfSquares[i];
    const element = document.getElementById(square.name);
    if(element) {
      element.onclick=function(){
        genericClickFunction(square);
      }
    }
  }
}


function handleInput(){
  const value = document.getElementById("simaiunic").value;
  const filteredArray = arrayOfSquares.filter(square=>{
    return square.tags.includes(value);
  });

  console.log(filteredArray)

  renderSquaresInDiv(filteredArray, "#squares");

  generateOnClickEvents();
}



document.getElementById("unic").onclick=handleInput;

const renderSquaresInDiv = (array, divId) => {
  const squareDivStringList = array.map(generateSquareDiv);
  
  console.log(squareDivStringList)

  const squareDivString = squareDivStringList.reduce((elm,acc)=>acc+=elm, '')

  const element = document.querySelector('#squares');

  console.log(element);

  document.querySelector(divId).innerHTML = squareDivString;
}


const renderSavedSquares = () => {
  const savedColorsArray = getSavedColors();

  console.log(savedColorsArray);

  renderSquaresInDiv(savedColorsArray, "#savedSquares");
}

setTimeout(()=>{
  renderSavedSquares();
}, 10)


//TODO: make it so you can pick multiple words and colors
// + button to add more items and click on colored squares
// to add them to your list

// For Adding squares to the list:
// We went thorugh all of the squares in the array and if we could find
// them inside our page by their name/id we gave them an onclick event
// that contained the square object (the name and the tags)
// if a square was clicked we would push it inside an array and save that
// in localStorage and add the html string to the newly created savedSquares
// div. On page load we get the data from localStorage and draw the squares 
// in that div.
