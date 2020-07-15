document.addEventListener("keydown", function (event) {

    if (event.code == "KeyA") {
        console.log("The 'A' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Audio/do.mp3";
        audio.play();
    }
    else if (event.code == "KeyS") {
        console.log("The 'S' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Audio/re.mp3";
        audio.play();
    }
    else if (event.code == "KeyD") {
        console.log("The 'D' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Audio/mi.mp3";
        audio.play();
    }
    else if (event.code == "KeyF") {
        console.log("The 'F' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Audio/fa.mp3";
        audio.play();
    }
    else if (event.code == "KeyG") {
        console.log("The 'G' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Audio/sol.mp3";
        audio.play();
    }
    else if (event.code == "KeyH") {
        console.log("The 'H' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Audio/lja.mp3";
        audio.play();
    }
    else if (event.code == "KeyJ") {
        console.log("The 'J' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Audio/si.mp3";
        audio.play();
    }
    else if (event.code == "KeyW") {
        console.log("The 'W' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Audio/do-diez.mp3";
        audio.play();
    }
    else if (event.code == "KeyE") {
        console.log("The 'E' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Audio/re-diez.mp3";
        audio.play();
    }
    else if (event.code == "KeyT") {
        console.log("The 'T' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Audio/fa-diez.mp3";
        audio.play();
    }
    else if (event.code == "KeyY") {
        console.log("The 'Y' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Audio/sol-diez.mp3";
        audio.play();
    }
    else if (event.code == "KeyU") {
        console.log("The 'U' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Audio/lja-diezi.mp3";
        audio.play();
    }
    else {
        console.log("Warning");
        alert('This key is not handle')
    }
});

