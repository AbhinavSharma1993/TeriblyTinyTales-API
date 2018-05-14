# TeriblyTinyTales-API
this api contains a method which reads a file hosted at http://terriblytinytales.com/test.txt and return the object which contains a key value pair of frequency of word and the word itself for the specified number of words
To call the method you can visit the link mentioned with a parameter to specify the number of words for example in the link below you will get 1 key value pair of word and its frequency.
https://thawing-bayou-82277.herokuapp.com/wordlist/1

To run this API locally download the code and run npm install in the project directory then run node app.js in command prompt.

In app.js there is a middle ware to allow coars setting and a get method to fetch words.

get method call the businesslogic/fetchWords.js file which contains the logic to sort and retutn word list.

one external module i.e.. request module has been used in this API. 
