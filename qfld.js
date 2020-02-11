// Random number generator
function randomizer(min, max) {
  return Math.floor(Math.random()*((max - min + 1))) + min;
}

// Line max for entire poem
var lineMax = 25;

// Generate max amount of stanzas for this instance
var stanzaRandomizer = randomizer(1,11);

var stanzaTotal = 0, lineAmount = 0, stanzaAmount = 0, lineTotal = 0;
var poem = [];

// Loop that generates lines until line or stanza limit
while (lineTotal <= lineMax && stanzaAmount <= stanzaRandomizer) {
  // Generate random amount of lines
  lineAmount = randomizer(4,25);
  // Adds current stanza's line amount to the total
  lineTotal += lineAmount;
  // Pushes number of lines in current stanza to the poem's array
  poem.push(lineAmount);
  // Adds break after stanza
  poem.push("<br>");

  stanzaTotal++;
}

console.log(poem)

//document.getElementById("poem").innerHTML = final-poem;
