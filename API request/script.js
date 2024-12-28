const requestUrl ='https://api.github.com/users/shishirghimiree'

const xhr = new XMLHttpRequest();
xhr.open('GET',requestUrl)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState===4){
        const data =JSON.parse(this.responseText);
        // const data =(this.responseText);

        console.log(data.avatar_url);
        // console.log(data.name);
    }
}
xhr.send();
