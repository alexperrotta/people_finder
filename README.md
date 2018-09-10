# People Finder

## Description
SalesLoft Offline Evaluation

## Built With

* React
* React Router
* Axios

## Instructions - 3 Levels

Level 1: Show a list of People records that are available via the API.  Display each Person’s name, email address, and job title.

Level 2: Create a button that, when clicked, displays a frequency count of all the unique characters in all the email addresses of all the People you have access to, sorted by frequency count (the count below).

Level 3:  Create a 2nd button that would show us a list of suggested possible duplicate People. However we would like you to decide what might constitute a duplicate - up to you.


## Planning

Before I began coding I decided to use React so that I could use separate components for each level. This would address the separation of concerns and keep the code organized.

I used Freehand from Invision to plan out what the front end might look like.

![Freehand](/public/freehand.png "Freehand")

Using Postman, I was able to see what the data looks like and make sure the authentication worked.

## Challenges

* Level 1  - Figuring out the right code for the authentication was a bit of a challenge. I was able to get a snippet of what the code might look like from Postman. I ran into a CORS issue and installed a Chrome extension that solved it for me. I don't believe this is the best solution and would like to investigate the best way to address that.

* Level 2 - After coding the function that outputs the frequency count of characters in each email address, I'm struggling with how to render that to the screen.

* Level 3 - I researched a few different approaches on how to handle fuzzy matching two strings. For now I coded comparing the lengths of two strings. I came across an npm package called 'string-similarity' that might work.

## Improvements

* Refactor the code to make sure there's no repeating code.
* Render the data from levels 2 and 3.
* Identify if each function is performant in case the data from the api gets larger.
* Add a loading spinner in case the data takes a few seconds to render to the screen.

