function SearchImages(){
    let clientId = "RotTZGJXbPE8miAhnamBfAibL9IDk0fdulq0kyHs6q4";
    let query = document.getElementById("Search").value;
    let url="https://api.unsplash.com/search/photos?client_id="+clientId+"&query="+query;

    //make a request to the api

    fetch(url)
        .then(function(data) {
            return data.json();
        })
        .then(function (data){
            console.log(data);

            data.results.forEach(photo => {

                let result =`
                   <img src="${photo.urls.regular}">
                   <a href="${photo.links.download}">
                `;

                $("#result").append(result);

            });
        });
        document.getElementById("result").innerHTML="";
}
function SearchNew(){
    let clientId = "RotTZGJXbPE8miAhnamBfAibL9IDk0fdulq0kyHs6q4";
    let query = "New";
    let url="https://api.unsplash.com/search/photos?client_id="+clientId+"&query="+query;

    fetch(url)
        .then(function(data) {
            return data.json();
        })
        .then(function (data){
            console.log(data);

            data.results.forEach(photo => {

                let result =`
                   <img src="${photo.urls.regular}">
                   <a href="${photo.links.download}">
                `;

                $("#result").append(result);

            });
        });
        document.getElementById("result").innerHTML="";
}
function SearchTop(){
    let clientId = "RotTZGJXbPE8miAhnamBfAibL9IDk0fdulq0kyHs6q4";
    let query = "Top";
    let url="https://api.unsplash.com/search/photos?client_id="+clientId+"&query="+query;

    fetch(url)
        .then(function(data) {
            return data.json();
        })
        .then(function (data){
            console.log(data);

            data.results.forEach(photo => {

                let result =`
                   <img src="${photo.urls.regular}">
                   <a href="${photo.links.download}">
                `;

                $("#result").append(result);

            });
        });
        document.getElementById("result").innerHTML="";
}
function SearchRandom(){
    let clientId = "RotTZGJXbPE8miAhnamBfAibL9IDk0fdulq0kyHs6q4";
    let query = "Random";
    let url="https://api.unsplash.com/search/photos?client_id="+clientId+"&query="+query;

    fetch(url)
        .then(function(data) {
            return data.json();
        })
        .then(function (data){
            console.log(data);

            data.results.forEach(photo => {

                let result =`
                   <img src="${photo.urls.regular}">
                   <a href="${photo.links.download}">
                `;

                $("#result").append(result);

            });
        });
        document.getElementById("result").innerHTML="";
}
function SearchLatest(){
    let clientId = "RotTZGJXbPE8miAhnamBfAibL9IDk0fdulq0kyHs6q4";
    let query = "Latest";
    let url="https://api.unsplash.com/search/photos?client_id="+clientId+"&query="+query;

    fetch(url)
        .then(function(data) {
            return data.json();
        })
        .then(function (data){
            console.log(data);

            data.results.forEach(photo => {

                let result =`
                   <img src="${photo.urls.regular}">
                   <a href="${photo.links.download}">
                `;

                $("#result").append(result);

            });
        });
        document.getElementById("result").innerHTML="";
}