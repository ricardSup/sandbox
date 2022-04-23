
const getTodos = (resource ,callback) => {
    const xhttp = new XMLHttpRequest();

    xhttp.addEventListener('readystatechange', () => {
        if(xhttp.readyState === 4 && xhttp.status === 200){
            const data = JSON.parse(xhttp.responseText);
            callback(undefined, data);
        }else if(xhttp.readyState == 4)
        {
            callback(xhttp.responseText, undefined);
        }
    });

    xhttp.open('GET', resource);

    xhttp.send();
}


const getTodosPromise = (resource) => {
    
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
    
        xhttp.addEventListener('readystatechange', () => {
            if(xhttp.readyState === 4 && xhttp.status === 200){
                const data = JSON.parse(xhttp.responseText);
                resolve(data);
            }else if(xhttp.readyState == 4)
            {
                reject('error data');
            }
        });
    
        xhttp.open('GET', resource);
    
        xhttp.send();
    })    
}
console.log(1);
getTodos('https://jsonplaceholder.typicode.com/todos/1',(err, data) => {
if(err){
    console.log(err)
}else{
    console.log(data);
    getTodos('sandbox.json',(err, data) => {
    if(err){
        console.log(err)
    }else{
        console.log(data);
    }
    });
}
});


// getTodosPromise('https://jsonplaceholder.typicode.com/todos/1').then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// });
console.log(2);