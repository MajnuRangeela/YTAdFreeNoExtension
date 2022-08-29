// Function to validate src parameter
// function validateSrc() {
//     if (!unr) {
//         unr = "Itz-fork";
//         return
//     }
//     let spl = unr.split("/");
//     if (spl.length < 2 || spl[1] == "") {
//         return throwError();
//     }
// }

// Function to setup fork button
function setupForkButton() {

    document.getElementById("fork").innerHTML = `<a class='github-button' href='https://github.com//majnurangeela/YTAdFreeNoExtension' data-color-scheme='no-preference: dark_high_contrast; light: dark_dimmed; dark: dark_dimmed;' data-icon='octicon-repo-forked' data-size='large' data-show-count='true' aria-label='Fork ${unr} on GitHub'>Fork it!</a>`;
}

function ytVidId(url) {
    var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    return (url.match(p)) ? RegExp.$1 : false;
  }

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

// Function to redirect to heroku
function redirectToVideo() {
    let input = document.getElementById("youtube-link").value;
    if (!input || input == "") {
        return throwError("Please enter a YouTube Video link!");
    }

    var flag = ytVidId(input);
    if (flag = 'true') {
        var ytId = youtube_parser(input);
    var domain = "https://www.youtube-nocookie.com/embed/";
    var playlist = "?playlist=";
    var last_part = "&autoplay=1&iv_load_policy=3&loop=1&modestbranding=1&start=";
    var opUrl = domain.concat(ytId,playlist,ytId,last_part);
    window.open(opUrl, "_blank");
    } else {
        return throwError("Please enter a valid YouTube Video url!");
    }

    
}

// Function to throw errors
function throwError(alTxt = null) {
    if (alTxt) {
        alert(alTxt);
    } else {
        window.location = "oops.html";
    }
}


// Get the url parameters
var unr = new URL(window.location.href).searchParams.get("src");

// validateSrc();
setupForkButton();