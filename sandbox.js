
// const getTodos = (resource ,callback) => {
//     const xhttp = new XMLHttpRequest();

//     xhttp.addEventListener('readystatechange', () => {
//         if(xhttp.readyState === 4 && xhttp.status === 200){
//             const data = JSON.parse(xhttp.responseText);
//             callback(undefined, data);
//         }else if(xhttp.readyState == 4)
//         {
//             callback(xhttp.responseText, undefined);
//         }
//     });

//     xhttp.open('GET', resource);

//     xhttp.send();
// }


// const getTodosPromise = (resource) => {
    
//     return new Promise((resolve, reject) => {
//         const xhttp = new XMLHttpRequest();
    
//         xhttp.addEventListener('readystatechange', () => {
//             if(xhttp.readyState === 4 && xhttp.status === 200){
//                 const data = JSON.parse(xhttp.responseText);
//                 resolve(data);
//             }else if(xhttp.readyState == 4)
//             {
//                 reject('error data');
//             }
//         });
    
//         xhttp.open('GET', resource);
    
//         xhttp.send();
//     })    
// }

console.log(1);
// getTodos('https://jsonplaceholder.typicode.com/todos/1',(err, data) => {
// if(err){
//     console.log(err)
// }else{
//     console.log(data);
//     getTodos('sandbox.json',(err, data) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data);
//     }
//     });
// }
// });


// getTodosPromise('https://jsonplaceholder.typicode.com/todos/1').then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// });


//chaining promise
// getTodosPromise('https://jsonplaceholder.typicode.com/todos/1').then(data => {
//     console.log(data);
//     return getTodosPromise('sandbox.json');
// }).then(data => {
//     console.log('promise 2 fired');
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

//fetch api
//when it get reject, https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
fetch('sandbox.json').then(resp => {
    console.log(resp);
    // resolve promise object, convert into json
    return resp.json();
}).then(json => {
    console.log(json);
}).catch(err => {
    console.log(err);
});

console.log(2);