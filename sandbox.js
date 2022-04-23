
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


//async function
const getTodosPromiseAsync = async () => {
    //no need to specify then catch, it has covered by await keyword to resolve promise result  
    const resp = await fetch('sandbox.json');

    //based on "condition when a promise get rejected", a promise still possible to be rejected
    //so need to add validation here before causing err resolve values into json
    if(resp.status !== 200){
        throw new Error('cannot fetch data');
    }

    //resp still a promise, to return data, you need resolve values
    const extracted = await resp.json();

    return extracted;
}

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
//condition when a promise get rejected : 
// A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.
// source https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// fetch('sandbox.json').then(resp => {
//     console.log(resp);
//     // resolve promise object, convert into json
//     return resp.json();
// }).then(json => {
//     console.log(json);
// }).catch(err => {
//     console.log(err);
// });

//async await, async func always return promise
//non blocking method
//still need to resolve return values
//async await does not supported by OLD BROWSER, like i.e
getTodosPromiseAsync()
    .then(resp => console.log(resp))
    //catch part, print message err
    .catch(err => console.log(err.message));

console.log(2);