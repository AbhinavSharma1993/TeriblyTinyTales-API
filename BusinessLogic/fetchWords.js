const request = require('request');
var file = 'http://terriblytinytales.com/test.txt';

//returns the words object
var fetchWords=(number)=>{

    return new Promise((resolve,reject)=>{

        request(file,(err, response, body)=> {
            if (err) reject(`This $(file) cannot be found`);
            var words=getWords(body);
            var wordObject=createObject(words);
            resolve(sortByNumber(wordObject,number));
        });

    });

};

//returns array of words
var getWords = (data)=> {
    // splits the string by spaces
    return data.split(/\s+/);
}

//returns object with key value pair of word and it's count
var createObject= (words)=> {

    var object = {};
    words.forEach((key)=> {
        if (object.hasOwnProperty(key)) {
            object[key]++;
        } else {
            object[key] = 1;
        }
    });

    return object;

}
//returns the array of words for specified number
var sortByNumber= (wordsMap,number)=> {

    // sort by count in descending order
    var wordsArray = [];
    wordsArray = Object.keys(wordsMap).map(function (key) {
        return {
            name: key,
            total: wordsMap[key]
        };
    });

    wordsArray.sort(function (a, b) {
        return b.total - a.total;
    });

    return wordsArray.slice(0,number);

}
module.exports={
    fetchWords
};