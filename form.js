

//const form = document.querySelector("form")
const email = document.getElementById("email")

/*form.addEventListener('submit', (event) => {
    const url  = "localhost:5000/subscript/"
    const response = postData(url, {
        email: "lau@email.com"
    })
    alert(response)
    console.log(response)
})*/

let submitForm = () => {
    const url  = "http://1270.0.0.1:5000/subscript/"
    const response = postData(url, {
        email: "lau@email.com"
    })
    
    console.log(response)
}


async function postData(url, data={}){
    const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "omit",
        headers: {
            "Content-Type": "application/json",            
        },
        body: JSON.stringify(data)
    });
    return response
}