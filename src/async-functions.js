

module.exports.giveItBackLater = function (value, callback) {
    function loadComplete() {
        callback(value)
    }
    setTimeout(loadComplete, 100)

}

module.exports.promiseToGiveItBackLater = function (value) {
    function loadComplete() {
        fetch(value)
        .then(function(res) {
            return res
        })
        .then(giveItBackLater(res))
        
    }
    setTimeout(loadComplete, 100)
    return res
}


module.exports.addSomePromises = function (somePromise) {
const promise = new Promise((resolve, reject) => {
    const fooPromise = Promise.resolve("Foo")
    const barPromise = Promise.reject("Bar")
})
.then(console.log(res))
}

// function getDocument(documentId, callback) {
//     function loadComplete() {
//         callback(documents[documentId])
//     }
//     setTimeout(loadComplete, 100)
// }

// function getAuthor(authorId, callback) {
//     function loadComplete() {
//         callback(authors[authorId])
//     }
//     setTimeout(loadComplete, 100)
// }
// getDocument(1, (document) => {
//     (getAuthor(document.authorId, console.log))})


// // get the url object: create a promise
// fetch('https://swapi.co/api/films/1/')
//   .then(function(response) {
//       // when resolved, return the json of response
//     return response.json()
//   })
//   .then(function(result) {
//       // when received, access the properties of the result object
//       console.log(result.vehicles)
//     })