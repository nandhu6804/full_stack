//location finder

function isTimeConsumption(t) {
    time = 999
    return time <= t
}

function isValidLocation(loc) {
    location = "tiruppur"
    return loc == location
}

function locationFinder() {
    loc = "tiruppur"
    time = 1000
    //return new Promise((resolve, reject) => {
    return new Promise((locFound, locNotFound) => {
        setTimeout(() => {
            //if (loc == "tiruppur" && time <= 1000) {
            if (isValidLocation(loc) && isTimeConsumption(time)) {
                locFound("Location Found")
            }
            else {
                locNotFound("Location Not Found yet")
                
            }
        }, 1000);
    })
}
locationFinder().then((resolvedMsg) => {
    console.log(resolvedMsg);
}).catch(function (rejectedMsg) {
        console.log(rejectedMsg);
    });