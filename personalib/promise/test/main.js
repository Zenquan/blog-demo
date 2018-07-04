var Promise = require('../src/promiseES6.js');
Promise.all([
    $.ajax({url: './data/1.txt', dataType: 'json'}),
    $.ajax({url: './data/2.txt', dataType: 'json'})
]).then((result) => {
    let [p1, p2] = result;
    console.log(p1, p2);
}).catch((err) => {
    console.log(err);
});

