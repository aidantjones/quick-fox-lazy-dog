// LIST OF STRINGS
var stings = [
  'Esther says she will stay with Sara till July',
  'At the pool we read this:',
  'Lifeguard Here Until Four',
  'The manager ran this ad:',
  'HIGH QUALITY PAPER FOR LESS',
  'do you understand it',
  'ALL SALES ARE FINAL',
  'Does she realize what her FINE JEWELRY is worth',
  'Order it now. Order it now. Order it now. Order it.',
  'Sit up straight',
  'You should know',
  'quiet, lazy, joyful trips',
  'The vast number of people like to buy big bargains',
  'To be, or not to be: that is the question',
  'memorizing the motions',
  'merely having a mental image',
  'invest some time and effort',
  'next October',
  'coming home from Mexico in March',
  'the tax returns',
  'the box factory',
  'packed with explosives',
  'an expert in explosives',
  'fight the fire',
  'no injuries',
  'Sixty thousand dollars',
  'the houses on both sides',
  'The quick brown fox jumped over the lazy dogs',
  'a beginner--with ambition',
  'for CARE OF',
  'the DIAGONAL is SLANT',
  'first-class tickets',
  'the plane to Houston',
  'will some day be antique',
  'to connect and to divide',
  'the aid of the party',
  'your entire lifetime',
  'do not erase. Do not cross out. Do not strike',
  'Let your errors stand',
  'Finish every line you start',
  'you made errors',
  'strike the right keys',
  'require a lighter touch',
  'the even timing of a metronome',
  '"The Father of Our Country"',
  '"We\'ll meet at the theater," said the actress',
  'from London to Broadway',
  'the omission of',
  'possession as in "Mary\'s"',
  'JEANETTE KIMBALL',
  'THE COMPUTER SHOW THAT EVEN ADULTS CAN UNDERSTAND',
  'NEW YORK UNIVERSITY',
  'School of Law',
  'Annual Homecoming',
  'The Bridge of San Luis Rey',
  'Thornton Wilder',
  'THE ROYAL OPERA HOUSE, COVENT GARDEN',
  'LUCIA DI LAMMERMOOR',
  'Zelda quickly mixed the very big jar of new soap flakes',
  'For many people',
  'relaxation, recreation and restoration',
  'a liberation from routine',
  'a celebration of new visual and mental sensations',
  'rings to warn you',
  'you are approaching the end of a line',
  'space across your paper',
  'listen for the bell',
  'count the number of spaces beyond the bell',
  'You will soon respond to the bell automatically',
  'Now is the time for all good men',
  'improvement of the environment',
  'beautify our avenues',
  'this is not absolute',
  'flying to Florida in July made Sally decide to fly',
  'RESTIGOUCHE RIVER',
  'To Lease Luxury Office Space At',
  'A MAGNIFICENT NEW OFFICE BUILDING',
  'The EXCITEMENT of Computers',
  'The FUN of Camping',
  'Sessions for Teenagers',
  'Come to SHERATON',
  'Come to LUXURY',
  'Hotels, Inns & Resorts Worldwide',
  'DOWN COMFORTERS',
  'DOWN PILLOWS',
  'Save Half the Retail Price',
  'FACTORY DIRECT PRICES',
  'ADULT EDUCATION',
  'THE NEW SCHOOL',
  'REGISTER NOW',
  'the lyrics to a song',
  'do not neglect your daily work',
  'you must continue',
  'selling bath towels for $7.47',
  'Meet me at 7:47 p.m. at the airport on April 7',
  'going out of business',
  'fine wool suits',
  'SOPHISTICATED LADY',
  'hardly visible',
  'lawsuits are still pending',
  'What a hot day!',
  'What a surprise!',
  'All of the 15 guests are on time',
  'What a high price!',
  'Do this arithmetic',
  'The hospital',
  'Come early!',
  'What a beautiful painting!',
  'Who is the artist?',
  'Oh! I had no idea that this is your work',
  'surprise or strong emotion',
  'It\'s truly amazing!',
  'I don\'t believe it!',
  'You must leave immediately!',
  'last minute shopping',
  'Meet me at my office',
  '17 cases of canned fruit',
  'perfect condition',
  'The spring semester seems to pass much faster',
  'we had terrible weather',
  'the master painter',
  'wife, sister, and daughter',
  'of prime importance',
  'He thought he saw',
  'make the exchange',
  'fish by air',
  'a dash of pepper',
  'shoes and shawl',
  'for all your lifetime',
  'California Canned Peaches',
  'Campbell\'s Soup',
  'The clock struck twelve',
  'There was a knock on the door',
  'Zack plucked up courage',
  'open the door a crack',
  'the rock that struck the deck',
  'come in pairs',
  'American Airlines, Flight #321 (New York to Chicago)',
  'United Airlines, Flight #25 (New York to San Francisco)',
  'Flight #1 (Around the World)',
  'New York to Europe',
  'San Francisco to the Orient',
  'the Palace Hotel',
  'the doctor\'s chart',
  'AT THE MACHINE',
  'in Kentucky',
  'after his marriage',
  'a woman of exceptional intellect and character',
  'less than a year',
  'a voracious reader',
  'quinine and quiet',
  'the malaria patient',
  'He was quite sure',
  'fingernails are long',
  'With the wine',
  'to a *foreign* country',
  'an occasional error',
  'concentratoin is necessary',
  'the skill of proodreading',
  'it must be inbisible',
  'any leffers',
  'the date',
  'the complimentary close',
  'the name of the dictator',
  'a most exciting trip to Kenya',
  'animals saw us in our cages',
  'wild animals are vegetarians',
  'protective parents',
  'the most voracious of the birds',
  'if you wish',
  'rather severe',
  'near the park',
  'It must have a garden',
  'Obviously, we are disappointed',
  'before the heat sets in',
  'Are you traveling first class?',
  'an elaborate meal',
  'THE CITY OF NEW YORK',
  'Where? Why? How?',
  'Spring forward!',
  'Fall back!'
];

// Random number generator
function randomizer(min, max) {
  return Math.floor(Math.random()*((max - min + 1))) + min;
}

// Line max for entire poem
var lineMax = 12;

// Generate max amount of stanzas for this instance
var stanzaRandomizer = randomizer(1,11);

var stanzaTotal = 0, lineAmount = 0, stanzaAmount = 0, lineTotal = 0;
var poem = [];

// Loop that generates lines until line or stanza limit
while (lineTotal < lineMax && stanzaAmount <= stanzaRandomizer) {
  // Generate random amount of lines
  lineAmount = randomizer(1,6);
  // Adds current stanza's line amount to the total
  lineTotal += lineAmount;
  // Adds current amount of stanzas to the total
  stanzaAmount++;
  // Pushes number of lines in current stanza to the poem's array
  poem.push(lineAmount);
  // Adds break after stanza
  poem.push("<br>");

  stanzaTotal++;
}

poem.pop();

// var poemNumber = poem.filter(item => typeof item === 'number');

// console.log(poemNumber);
console.log(poem);
// console.log(stanzaAmount);
// console.log(lineAmount);


//document.getElementById("poem").innerHTML = final-poem;
