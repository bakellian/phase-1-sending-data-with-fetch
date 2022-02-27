function submitData(name, email) {
    let dataObj = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            "name": name,
            "email": email
        })
    };
    return fetch("http://localhost:3000/users", dataObj)
    .then(res => res.json())
    .then(body => addUser(body.id))
    .catch(res => document.body.innerHTML = alert("Unauthorized Access"))
}

function addUser(newUser) {
    document.getElementsByTagName("body")[0].innerHTML = newUser;
    document.body.appendChild(message)
}

submitData("Lily", "lily@pad.com")