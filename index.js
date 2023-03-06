


function shout(string) {
    return string.toUpperCase();
}

function whisper (string) {
    return string.toLowerCase()
}

function logShout(string) {
    console.log(string.toUpperCase())
}

function logWhisper(string){
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string){
    let msg;
    if (string === string.toLowerCase()){
        msg = "I can\'t hear you!";
    }
    else if(string === string.toUpperCase()){
        msg = "YES INDEED!";
    }
    else if(string === "Let\'s have dinner together!"){
        msg = "I would love to!";
    }
    console.log(string)
    return msg
}