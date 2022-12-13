const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const mentorModule = require('../abc/xyz/myModule');
const req = require('express/lib/request');
const { route } = require('express/lib/application');
const { param } = require('express/lib/request');


router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr = [1, 2, 3, 5, 6, 7]

    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }

    let lastDigit = arr.pop()
    let consecutiveSum = lastDigit * (lastDigit + 1) / 2
    let missingNumber = consecutiveSum - total

    res.send({ data : missingNumber });
});

router.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr = [33, 34, 35, 37, 38]
    let len = arr.length

    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }

    let firstDigit = arr[0]
    let lastDigit = arr.pop()
    let consecutiveSum = (len + 1) * (firstDigit + lastDigit) / 2
    let missingNumber = consecutiveSum - total

    res.send({ data: missingNumber });
});




//problem no 2
// const arr = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins", "Harry potter",]
// router.get('/movies/:id/', function (req, res) {
//     console.log("this is req param", req.params);
//     if (arr.length < req.params.id) {
//         console.log("Movies does not exist");
//     }
//     else {
//         console.log("Your movie is = ", arr[req.params.id]);
//     }
//     res.send("Hola wold")
// })



router.get('/profile/:name/:order/', function (req, res) {  // :name = making as key value pair against params
    console.log("Hello this is path param print", req.params); //params is objec hare and having key value pair
    console.log("profile name is ", req.params.name); // to pick up dynamic value or params
    console.log("and order name is ", req.params.order); // accessing order value 
    res.send("This profile is ")
})

router.get('/shoes', function (req, res) {
    console.log("This is req.query", req.query);
    res.send("Hello world")
})




router.get("/profile-details", function (req, res) {
    // Write the LOGIC here
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)
    console.log(`The mentor of the day is ${mentorModule.mentor}`)

    res.send('any dummy text from route handler 1')
});


router.get('/test-me', function (req, res) {
    console.log("I am here")
    res.send("any dummy text from route handler 2")
})

router.get('/students', function (req, res) {
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

// PATH Param example
router.get('/student-details/:name', function (req, res) {
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use many ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request " + JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)

    res.send('Dummy response')
})

// PATH Param example
// router.get("/profile/:name", function(req, res){
//     console.log('Printing the request to find out wjere name is stored',req.params)
//     console.log('user name is',req.params.name)
//     //console.log(`User requesting for profile is ${name}`)
//     res.send("dummy details")
// })

// Query Param example
// router.get("/shoes", function(req, res){
//     console.log("The filter options for shoes are -",req.query)
//     //req.query.size
//     //req.query.brand
//     res.send("dummy shoes response")
// })

module.exports = router;