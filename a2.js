const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');
//document.addEventListener('DOMContentLoaded', getJoke);

button.addEventListener('click', getJoke1);

async function getJoke1() {
    //let song='RICK ROLL SOUND_NEVER GONNA GIVE YOU UP-High Quality.wav';
    //new Audio(song).play();
    const jokeData = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    //console.log(jokeObj)
    //console.log(jokeObj.joke)
    jokeText.innerHTML = jokeObj.joke;

    /*function myFunction2(){
       alert(jokeObj.joke);
    }
    //new Audio('http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg').play();
     
    myFunction2();
    new Audio('RICK ROLL SOUND_NEVER GONNA GIVE YOU UP-High Quality.wav').pause();*/
}
async function getJoke() {
    let song = 'RICK ROLL SOUND_NEVER GONNA GIVE YOU UP-High Quality.wav';
    new Audio(song).play();
    const jokeData = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    //console.log(jokeObj)
    console.log(jokeObj.joke)
    jokeText.innerHTML = jokeObj.joke;
    document.getElementsByTagName(alert).innerHTML = jokeObj.joke;
    function myFunction2(callback) {
        //alert(jokeObj.joke);
        var notificationBody = new Notification('New Message', {
            body: jokeObj.joke,
            icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP2a2E-TcgaaONFrf6ontOigcLrAjkB_wwRQ&usqp=CAU',
        });
        /*notificationBody.onclick = (e) =>{
            window.location.href = 'http://127.0.0.1:5500/a2.html'
        }*/
        callback();
    }
    function myFunction3() {
        setTimeout(getJoke, 15000);
    }
    myFunction2(myFunction3);
    new Audio('RICK ROLL SOUND_NEVER GONNA GIVE YOU UP-High Quality.wav').pause();
}

setTimeout(myFunction, 3000);
//setTimeout(function, milliseconds)
function myFunction() {
    if (confirm("this site is trying to send notification")) {
        myFunction1();
    } 
}

function myFunction1() {
    getJoke();
}

/*function showNotification() {
    getJoke();
    async function getJoke() {
        let song = 'RICK ROLL SOUND_NEVER GONNA GIVE YOU UP-High Quality.wav';
        new Audio(song).play();
        const jokeData = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        });
        const jokeObj = await jokeData.json();
        var notificationBody = new Notification('New Message', {
            body: jokeObj.joke,
        });

    }
}
showNotification();
*/
