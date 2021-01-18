console.log('welcome api');
function getData(){
    // url = 'https://api.github.com/users';
    url ='http://localhost:2000/allGreetings'
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data)

    })
}

getData()
