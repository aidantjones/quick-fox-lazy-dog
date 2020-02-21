
// To view well-formatted comments, view fullscreen without soft-wrapping

/*jshint esversion: 6 */

var length = strings.length

function poemGenerator() {

  function randomizer(min, max)   {                                  // Generates random number
    return Math.floor(Math.random() * ((max - min + 1))) + min;
  }

  var stanzaRandomizer = randomizer(1, 11),
      lineMax = 12,
      lineAmount = 0,
      lineTotal = 0,
      stanzaAmount = 0,
      loopCounter = 0,
      arrayPoem = ["<h2>"],
      seedPoem = ["h"];

  function stringNumberGenerator() {                                // Pulls random string
    return randomizer(1, length);
  }

  var stringNumber = stringNumberGenerator();
  arrayPoem.push(strings[stringNumber], "</h2><p>");                // Pushes string onto string poem array
  seedPoem.push(stringNumber, "he");                                // Pushes string index onto array poem array

  while (lineTotal < lineMax && stanzaAmount <= stanzaRandomizer) { // Loop that generates lines until line or stanza limit
    lineAmount = randomizer(1, 6);                                  // Generate random amount of lines
    lineTotal += lineAmount;                                        // Adds current stanza's line amount to the total
    stanzaAmount++;                                                 // Adds current stanza to total
    for (loopCounter = 0; loopCounter < lineAmount; loopCounter++) {// Pushes in strings and proceeding <br> tag
      var loopStringNumber = stringNumberGenerator();
      arrayPoem.push(strings[loopStringNumber], '<br>');
      seedPoem.push(loopStringNumber, "b");
    }
    arrayPoem.push("<p>");                                          // Adds break after stanzas
    seedPoem.push("p");
  }

  arrayPoem.pop();                                                  // Takes off last <p>
  seedPoem.pop();

  var stringPoem = arrayPoem.toString().replace(/,/g, '');          // Converts string poem array to a string and removes seperating commas
  var poemArray = [stringPoem, seedPoem];                           // Creates master array that contains both the poem string and an array version from which a seed can be created
  return poemArray;
}

function displayButtons(){
  document.getElementById('finalpoem').classList.add('fadein');
  document.getElementById('buttons').classList.remove("hidden");
  document.getElementById('about').classList.remove("hidden");
  document.getElementById('footer').classList.remove("hidden");
  var divider = document.getElementsByClassName('divider');
  function dividerRemover() {
    for (var loopNumber = 0; loopNumber < divider.length; loopNumber++) {
      divider[loopNumber].classList.remove('hidden');
    }
  }
  dividerRemover();
}

// GENERATE POEM BUTTON
function displayAndFade() {
  var displayPoem = document.getElementById('finalpoem');
  var displaySeed = document.getElementById('finalseed');
  var poemArray = poemGenerator();
  var displayPoemString = poemArray[0];                             // Pulls poem string from the master array
  var displaySeedString = window.location.href.concat("?", poemArray[1].toString().replace(/,/g, '')); // Converts seed array to a string and concatonates it to the current URL that can be shared
  displayPoem.innerHTML = displayPoemString;                        // Fills main with poem string
  displaySeed.innerText = displaySeedString;                        // Fills dummy field with string for later copying
  displayButtons()
  document.getElementById('stringnumber').innerHTML = length.toString();
  document.getElementById('permutation').innerHTML = permutation(length).toPrecision(3).replace("e+", " × 10<sup>" ).concat("<sup>");
}

// COPY
function copy(buttonID, buttonText, buttonCopyText, finalTextID) {
  function buttonReset() {
    // buttonField = ""\"buttonText\""
    var copyButton = document.getElementById(buttonID);
    copyButton.innerHTML = buttonText;
  }
  var selection = window.getSelection();
  var range = document.createRange();
  range.selectNodeContents(document.getElementById(finalTextID));
  selection.addRange(range);
  document.execCommand("copy");
  selection.removeAllRanges();
  document.getElementById(buttonID).innerHTML = buttonCopyText;
  setTimeout(buttonReset, 2000);
}

// GENERATE POEM FROM SEED
function poemFromSeed() {
  var originalSeed = window.location.href.replace(/.*\?/, "");
  var newSeed = originalSeed.split(/(\d+)/);
  var loopAmount = 0;
  while (loopAmount < newSeed.length) {
    var originalIndex = newSeed.findIndex(value => /^\d+$/.test(value)); // Finds index value of next available number in original array
    var newSeedIndex = newSeed[originalIndex];                           // Gets value in original array using the previous originalIndex
    newSeed[originalIndex] = strings[newSeedIndex];

    var originalBPEIndex = newSeed.findIndex(value => /^bp$/.test(value)); // Replaces seed paragraph code with HTML tags
    newSeed[originalBPEIndex] = "</p><p>";
    var originalBIndex = newSeed.findIndex(value => /^b{1}$/.test(value)); // Replaces seed break code with HTML tags
    newSeed[originalBIndex] = "<br>";

    loopAmount++;
  }
  var hIndex = newSeed.findIndex(value => /^h$/.test(value));           // Replaces seed opening h2 code with HTML tag
  newSeed[hIndex] = "<h2>";
  var heIndex = newSeed.findIndex(value => /^he$/.test(value));         // Replaces seed closing h2 code with HTML tag
  newSeed[heIndex] = "</h2><p>";

  newSeed.length = (newSeed.length - 1);                                // Removes unnecessary value from end of array
  newSeed.push("</p>");

  var finalPoem = newSeed.toString().replace(/,/g, '');                 // Converts array to string and removes commas

  document.getElementById("finalpoem").innerHTML = finalPoem;

  displayButtons();
}


// PERMUTATION CALCULATOR
var total = 0;
var exponent = 76;                                                      // Max amount of possible lines

function permutation(num) {
  while (exponent > 0) {
    total += num ** exponent;
  exponent--;                                                           // Accounts for every amount of possible lines
  }
  return total;
}


function urlChecker(){
  if (window.location.href.indexOf("?") != -1) {
    poemFromSeed()
    console.log("Seed detected")
  }
  else {
    console.log("No seed detected");
  }
}
