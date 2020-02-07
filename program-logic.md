# Quick Fox, Lazy Dog Program

## Stanza Rules
Minimum of 3 lines, max of 11

## Poem Rules
Max 25 lines

## Logic
### 1 - Stanzas
Define *lineAmount*
  Random number generator **min 4, max 25**

define *createStanza*
  define *stanzaRandomizer*
    picks random number between 1 and 11
  add *stanzaRandomizer* value to *stanzaTotal*
  If *stanzaTotal* is greater than *lineAmount*
    if true
      stop
      Delete last hard return ??
      Move on to stringRandomizer function
    if false
      create *stanzaRandomizer* number of lines
      On said lines, insert *stringRandomizer* function
      Locate final *stringRandomizer* function ??
        insert Hard Return
      Repeat *createStanza*

#### Example
*lineAmount* = 12

##### Cycle 1
*stanzaRandomizer* = 3
0+3=3<12 √

```
stringRandomizer
stringRandomizer
stringRandomizer

```

##### Cycle 2
*stanzaRandomizer* = 6
3+6=9<12 √

```
stringRandomizer
stringRandomizer
stringRandomizer
stringRandomizer
stringRandomizer
stringRandomizer

```

##### Cycle 3
*stanzaRandomizer* = 10
9+10=19>12
STOP

Last hard return removed

**Resulting string:**
```
stringRandomizer
stringRandomizer
stringRandomizer

stringRandomizer
stringRandomizer
stringRandomizer
stringRandomizer
stringRandomizer
stringRandomizer
```

### 2 - Lines
Get number of lines in string database
  set equal to *dbLength*
Define *stringRandomizer* function
  Set **max** equal to *dbLength*
  Set **min to 1**
  Generate random number within this range
Execute stringRandomizer functions

Replace number in poem with corresponding string in database by matching ID ???

print output

#### Example
*dbLength* = 86

```
83
6
33

20
40
12
77
44
58
```
