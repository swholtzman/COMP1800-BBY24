function leave() {
    document.getElementById('charge').classList.add('leave');
    document.getElementById('map').classList.add('leave');
    setTimeout(function () { location.href = "main.html"; }, 1000);
}

var cards = document.getElementById('cards');

window.addEventListener("click", function (event) {
    if (event.target.nodeName == "BODY") {
        leave();
    }
});


function displayBatteryPercentage(userID) {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {
            db.collection("users").doc(user.uid)
                .onSnapshot(percent => {                                                               //arrow notation
                    console.log("current document data: " + percent.data());                          //.data() returns data object
                    document.querySelector("#charge_percent_here").innerHTML = percent.data().charge;      //using javascript to display the data on the right place

                })
        }
    })
}
displayBatteryPercentage("pxyOYQRUt1XAkIME9rH8oDUUvbI3");

function displayEstimatedTime() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {
            db.collection("users").doc(user.uid)
                .onSnapshot(estTime => {                                                               //arrow notation
                    console.log("current document data: " + estTime.data());                          //.data() returns data object
                    document.querySelector("#est_time_here").innerHTML = estTime.data().est_time;      //using javascript to display the data on the right place
                })
        }
    })
}
displayEstimatedTime("pxyOYQRUt1XAkIME9rH8oDUUvbI3")

