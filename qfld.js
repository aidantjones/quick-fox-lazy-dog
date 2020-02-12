function poemGenerator() {

  function randomizer(min, max) // Generates random number
  {
    return Math.floor(Math.random()*((max - min + 1))) + min;
  }

  var stanzaRandomizer = randomizer(1,11),
      lineMax = 12,
      lineAmount = 0,
      lineTotal = 0,
      stanzaAmount = 0,
      loopCounter = 0,
      arrayPoem = ["<h2>"];

  function poemStringGenerator() // Pulls random string
    {
    return strings[randomizer(1,strings.length)];
    }

  arrayPoem.push(poemStringGenerator(), "</h2>");

  while (lineTotal < lineMax && stanzaAmount <= stanzaRandomizer) // Loop that generates lines until line or stanza limit
    {
      lineAmount = randomizer(1,6); // Generate random amount of lines
      lineTotal += lineAmount; // Adds current stanza's line amount to the total
      stanzaAmount++; // Adds current stanza to total
      for (loopCounter = 0; loopCounter < lineAmount;  loopCounter++) // Pushes in strings and proceeding <br> tag
        {
          arrayPoem.push(poemStringGenerator(), '<br>');
        }
      arrayPoem.push("<p>"); // Adds break after stanzas
    }

  arrayPoem.pop(); // Takes off last <p>

  return arrayPoem.toString().replace(/,/g, ''); // Convert poem to string and remove commas
}
