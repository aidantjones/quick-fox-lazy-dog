# Quick Fox, Lazy Dog
*Auto-generated poetry from vintage typing exercises*

## [Generate your own](https://www.aijo.info/qfld)

## Philosophy

If you ever took a typing class, you might remember some of the exercises. Much of them were gibberish or random words; some were intelligible but unnatural. This latter text from Uncanny Valley attempts to create a realistic typing scenario while still testing the skills learned in a particular lesson.

I noticed this offputting text and thought it would render endearing poetry. The tradition of found poetry and [AI's recent foray into poetic authorship](https://www.wired.co.uk/article/google-artificial-intelligence-poetry) inspired this project.

I wrote a program that randomly generates poetry from strings gathered from:

 - *[Gregg Keyboarding and Personal Application](https://archive.org/details/greggkeyboarding0000unse)* (Lloyd et al 1987)
 - *[Mastering Computer Typing: A Painless Course for Beginners and Professionals](https://archive.org/details/masteringcompute00lind)* (Lindsell-Roberts 1995)
 - *[Touch Typing Made Simple](https://archive.org/details/touchtypingmades00mark/page/n8)* (Mark 1985)
 - *[Typing: A Step-by-Step Guide to Keyboard Mastery](https://archive.org/details/typingastepbyste00bett)* (Croft 1994)
 - *[Typing Made Easy](https://archive.org/details/typingmadeeasyin00dian)* (Bellavance 1997)

Any set of strings could be used, however, providing opportunities to create infinitely diverse poetry.

The results are humorous but also thought-provoking. Typing exercises are not intended for use outside of touch typing practice. De-contextualizing them highlights how technology can change what we type and, ultimately, create, including this project.

The source material also comes out of the home computer boom. The layperson's interest in computing swelled during the eighties and nineties. *Quick Fox, Lazy Dog* honors that trailblazing era.

## Numbers

From the 555 strings, there are 3.69 × 10<sup>208</sup> poems possible, [much, much more than there are particles in the observable universe](https://www.popularmechanics.com/space/a27259/how-many-particles-are-]in-the-entire-universe/). It's also greater than a googol squared. Guess we'll be here a while!

I used [the following](https://www.wolframalpha.com/input/?i=%3Cmath+xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1998%2FMath%2FMathML%22%3E%3Cmunderover%3E%3Cmo%3E%E2%88%91%3C%2Fmo%3E%3Cmrow%3E%3Cmi%3Ex%3C%2Fmi%3E%3Cmo%3E%3D%3C%2Fmo%3E%3Cmn%3E1%3C%2Fmn%3E%3C%2Fmrow%3E%3Cmn%3E72%3C%2Fmn%3E%3C%2Fmunderover%3E%3Cmsup%3E%3Cmi%3En%3C%2Fmi%3E%3Cmi%3Ex%3C%2Fmi%3E%3C%2Fmsup%3E%3C%2Fmath%3E) to calculate this figure:

![\sum_{x=1}^{72}n^x](https://render.githubusercontent.com/render/math?math=%5Csum_%7Bx%3D1%7D%5E%7B72%7Dn%5Ex)

where *n* equals the string amount. It sums the permutations formula with replacement. Poems with the line amounts from 1 to 72 are possible. The permutations of strings for each possible line amount comprises the total number of possibilities.

## Process

If one were to make poetry out of *any* word in a typing book, it wouldn't be a restriction. I sourced strings from the exercise sentences in monospace font (setting most exercises in monospace font became a de facto standard in typing books). The algorithm shapes the poems governed by the following parameters:

  - I recorded strings exactly as written except for ending periods
  - I took artistic license in editing the beginnings and endings of strings. The program does not put a string in the middle of another, like poetry fridge magnets
  - Each string is a new line
  - Strings must contain at least two words

These guidelines avoid mixing individual words to preserve the original tone.

## Sample Poems

### an elaborate meal

the bright hues take form  
her Ph.D. from Oregon State  
fight the fire  
now in reno  
inadequate for our purposes

Rick loves that fame  
Sessions for Teenagers

Does she realize what her FINE JEWELRY is worth  
The bird floew way up in the sky to get away from the smoke  
invest some time and effort  
near the park  
The women in a village  
Hotels Inns & Resorts Worldwide

### the skill of proodreading

a new friend  
School of Law  
Hotels Inns & Resorts Worldwide  
the name of the dictator

crazy quilts  
Camp overnight

go for the bus--just in time to miss it  
many jovial men  
go to town for the pen  
the houses on both sides  
The FUN of Camping  
The leaves have lost their brilliant green

### Shout! Up! No! Down! There! Yes! Here! Oh!
the date  
TAKE CLASSES IN BIKE SAFETY  
she may take a walk  
Eat at a country inn

"Isn't it fine!"  
the lyrics to a song  
Look at the sky!  
to connect and to divide

a hold on things

I went in  
TAKE CLASSES IN BIKE SAFETY

this is not absolute  
the tax returns  
Annual Homecoming  
the plane to Houston

## Conceptualization

Because I'm a big ol' nerd, I recently purchased an [Apple Extended Keyboard II](https://en.wikipedia.org/wiki/Apple_Extended_Keyboard). I started doing typing exercises to become acquainted with it (it's beautiful) which reminded of this hidden poetry.

I've also started to learn basic front-end web development languages, including Javascript. It occurred to me that Javascript would be the perfect language to write this poetry generator in. The rest is history.
