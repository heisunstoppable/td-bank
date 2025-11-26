// Change these to your own username and password
const correctUser = "Margret@td";
const correctPass = "Ivy90@!";

function login() {
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;


    if (username === correctUser && password === correctPass) {
        window.location.href = "welcome.html";
    } else {
        document.getElementById('result').style.color = 'red';
        document.getElementById('result').innerText = 'Invalid credentials!';
    }
}






