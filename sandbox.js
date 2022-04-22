
console.log('test')

const getTodos = (callback) => {
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

//    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
    xhttp.open('GET', 'sandbox.json');

    xhttp.send();
}

getTodos((err, data) => {
console.log('method fired');
if(err){
    console.log(err)
}else{
    console.log(data);
}
});