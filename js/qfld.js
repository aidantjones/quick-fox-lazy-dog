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

//UNHIDES CONTENT
function reveal() {
  $("#finalpoem").addClass("fadein");
  $("#buttons").removeClass("hidden");
  $("#about").removeClass("hidden");
  $("footer").removeClass("hidden");
  $(".divider").removeClass("hidden");
}

// GENERATE POEM BUTTON
function displayAndFade() {
  var poemArray = poemGenerator();
  $("#finalpoem").html(poemArray[0]);                               // Fills main with poem string
  $("#finalseed").html(window.location.href.concat("?", poemArray[1].toString().replace(/,/g, ''))); // Fills dummy field with string for later copying
  reveal();
  $("#stringnumber").text(length);                                  // Puts amount of strings into paragraph
  $("#permutation").html(permutation(length).toPrecision(3).replace("e+", " × 10<sup>" ).concat("<sup>")); // Puts amount of poem permutations into paragraph
}

// GENERATE POEM FROM SEED
function poemFromSeed() {
  var originalSeed = window.location.href.replace(/.*\?/, "");      // Grabs seed from end of address bar
  var newSeed = originalSeed.split(/(\d+)/);                        // Splits string into numbers and charcters then returns an array
  var loopAmount = 0;
  while (loopAmount < newSeed.length) {
    var originalIndex = newSeed.findIndex(value => /^\d+$/.test(value));   // Finds index value of next available number in original array
    var newSeedIndex = newSeed[originalIndex];                             // Gets value in original array using the previous originalIndex
    newSeed[originalIndex] = strings[newSeedIndex];

    var originalBPEIndex = newSeed.findIndex(value => /^bp$/.test(value)); // Replaces seed paragraph code with HTML tags
    newSeed[originalBPEIndex] = "</p><p>";
    var originalBIndex = newSeed.findIndex(value => /^b{1}$/.test(value)); // Replaces seed break code with HTML tags
    newSeed[originalBIndex] = "<br>";

    loopAmount++;
  }
  var hIndex = newSeed.findIndex(value => /^h$/.test(value));        // Replaces seed opening h2 code with HTML tag
  newSeed[hIndex] = "<h2>";
  var heIndex = newSeed.findIndex(value => /^he$/.test(value));      // Replaces seed closing h2 code with HTML tag
  newSeed[heIndex] = "</h2><p>";

  newSeed.length = (newSeed.length - 1);                             // Removes unnecessary value from end of array
  newSeed.push("</p>");
  $("#finalpoem").html(newSeed.toString().replace(/,/g, ''));

  reveal();
}

// COPY
function copy(copyText, buttonID, alert) {
  var buttonText = $("#" + buttonID).text();                         // Gets text of current button to restore later after alert expires
  var selection = window.getSelection();
  var range = document.createRange();
  range.selectNodeContents(document.getElementById(copyText));
  selection.addRange(range);
  document.execCommand("copy");
  selection.removeAllRanges();                                       // Creates dummy range, fills it with text, copies it, and removes the selection
  $("#" + buttonID).text(alert);                                     // Sets button to alert text
  setTimeout(function() {                                            // Reverts after 2 seconds
    $("#" + buttonID).html(buttonText)
  }, 2000);
}

// PERMUTATION CALCULATOR
var total = 0;
var exponent = 76;                                                   // Max amount of possible lines

function permutation(num) {
  while (exponent > 0) {
    total += num ** exponent;
  exponent--;                                                        // Accounts for every amount of possible lines
  }
  return total;
}

$(document).ready(function() {
  if (window.location.href.indexOf("?") != -1) {
    poemFromSeed()
    console.log("Seed detected")
  }
  else {
    console.log("No seed detected");
  }
  $("#generatepoem").click(function() {
    (displayAndFade())
  });
  $("#copypoembutton").click(function() {
    copy('finalpoem', 'copypoem', 'Poem copied!');
  });
  $("#copyseedbutton").click(function() {
    copy("finalseed", "copyseed", "Poem link copied!");
  });
});
