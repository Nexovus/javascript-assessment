// #1
// Conditionally branch your code
// write a function that receives a number as its argument;
// if the number is divisible by 3, the function should return 'fizz';
// if the number is divisible by 5, the function should return 'buzz';
// if the number is divisible by 3 and 5, the function should return
// 'fizzbuzz';
//
// otherwise the function should return the number, or false if no number was provided or the value provided is not a number
const fizzBuzz = function (num) {
    if (!isNaN(num)) {
        let fizzText = num % 3 == 0 ? 'fizz' : '';
        let buzzText = num % 5 == 0 ? 'buzz' : '';
        if (fizzText.length || buzzText.length) {
            return fizzText + buzzText;
        } else {
            return num;
        }
    } else {
        return false;
    }
}

// #1 test cases
const _HTML = {
    pass: `✅ Passed!`,
    fail: `❌ Failed!`,
    testFizz: `<br>Test: fizzBuzz(`,
    expected: `)<br>Expected Result: `,
    actual: `<br>Actual Result: `,
};
document.querySelector('.test-results').innerHTML += `<h3>#1 Test Cases</h3>
    ${fizzBuzz(6) == `fizz` ? _HTML.pass : _HTML.fail}${_HTML.testFizz}6${_HTML.expected}fizz${_HTML.actual}${fizzBuzz(6)}<hr>
    ${fizzBuzz(10) == `buzz` ? _HTML.pass : _HTML.fail}${_HTML.testFizz}10${_HTML.expected}buzz${_HTML.actual}${fizzBuzz(10)}<hr>
    ${fizzBuzz(15) == `fizzbuzz` ? _HTML.pass : _HTML.fail}${_HTML.testFizz}15${_HTML.expected}fizzbuzz${_HTML.actual}${fizzBuzz(15)}<hr>
    ${fizzBuzz(17) == 17 ? _HTML.pass : _HTML.fail}${_HTML.testFizz}17${_HTML.expected}17${_HTML.actual}${fizzBuzz(17)}<hr>
    ${fizzBuzz("string stuff") === false ? _HTML.pass : _HTML.fail}${_HTML.testFizz}"string stuff"${_HTML.expected}false${_HTML.actual}${fizzBuzz("string stuff")}<hr>
    ${fizzBuzz() === false ? _HTML.pass : _HTML.fail}${_HTML.testFizz}${_HTML.expected}false${_HTML.actual}${fizzBuzz()}<hr>
    ${fizzBuzz(5.4) == 5.4 ? _HTML.pass : _HTML.fail}${_HTML.testFizz}5.4${_HTML.expected}5.4${_HTML.actual}${fizzBuzz(5.4)}<hr>`;


// #2
// Return a new array after Removing all instances of a value from an array
const remove = function (arr, item) {
    let newArr = [];
    arr.forEach((entry) => {
        if (entry != item) {
            newArr.push(entry);
        }
    });
    return newArr;
}

// #2 test cases


document.querySelector('.test-results').innerHTML += `<h3>#2 Test Cases</h3>
    ${JSON.stringify(remove([1, 2, 3, 4], 3)) == JSON.stringify([1, 2, 4]) ? _HTML.pass : _HTML.fail}
        <br>Test: remove([1, 2, 3, 4], 3)<br>Expected Result: [1, 2, 4]<br>Actual Result: ${JSON.stringify(remove([1, 2, 3, 4], 3))}<hr>
    ${JSON.stringify(remove([1, 2, 3, 4, 2], 2)) == JSON.stringify([1, 3, 4]) ? _HTML.pass : _HTML.fail}
        <br>Test: remove([1, 2, 3, 4, 2], 2)<br>Expected Result: [1, 3, 4]<br>Actual Result: ${JSON.stringify(remove([1, 2, 3, 4, 2], 2))}<hr>`;


// #3
// Iterate over an object’s “own” properties
// Return a string of object's own properties in the following format: 
// [ 'foo: bar', 'baz: bim' ]
const iterate = function (obj) {
    let newArr = [];
    for (key in obj) {
        newArr.push(key + ': ' + obj[key]);
    }
    return newArr;
}


// #3 test cases
document.querySelector('.test-results').innerHTML += `<h3>#3 Test Cases</h3>
    ${JSON.stringify(iterate({ foo: "bar", baz: "bim" })) == JSON.stringify(["foo: bar", "baz: bim"]) ? _HTML.pass : _HTML.fail}
        <br>Test: iterate({foo: "bar", baz: "bim"})<br>Expected Result: ["foo: bar", "baz: bim"]<br>Actual Result: ${JSON.stringify(iterate({ foo: "bar", baz: "bim" }))}<hr>
    ${JSON.stringify(iterate({ bing: "bang", zip: "zap" })) == JSON.stringify(["bing: bang", "zip: zap"]) ? _HTML.pass : _HTML.fail}
        <br>Test: iterate({bing: "bang", zip: "zap"})<br>Expected Result: ["bing: bang", "zip: zap"]<br>Actual Result: ${JSON.stringify(iterate({ bing: "bang", zip: "zap" }))}<hr>`;


// #4
// Write a function that GETs the JSON data from a URL and logs the result in the console:
const logJson = function (url) {
    if (url.length && url != ''){
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                displayPosts(data);
            });
    }
}

// #4 test case
logJson("https://jsonplaceholder.typicode.com/posts");