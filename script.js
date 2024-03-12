const textElement = document.getElementById("textRed");
const textElement1 = document.getElementById("textBlue");
const imgSize = document.getElementById("imageResize");
const introText = document.getElementById("introText");
const introTextWrapper = document.getElementById("introMessage");

function windowUpdate(){
    const width = window.innerWidth;
    const height = window.innerHeight;

    windowWidth.textContent = width;
    windowHeight.textContent = height;

    if (width > 1000) {
        if (height > 800) {
            introText.innerHTML = `Wait, I have to tell you something but it's too public here. Come a little closer.<br>You're ${width - 1000} pixels too far and ${height - 800} pixels too high up right now.`;
        } else {
            introText.innerHTML = `Still ${width - 1000} pixels too far!`;
        }
    } else if (width < 1000 && height > 800) {
        // When the width is less than 1000 but greater than or equal to 800, tell the user how close they are
        introText.innerHTML = `Still ${height - 800} pixels too high up!`;
    } else if (width < 800) {
        // For widths less than 800 pixels, you might want to keep your existing message or adjust accordingly
        introText.innerHTML = "Ok so here's the thing...";
    }

    if(width < 600 && height < 400){
        introTextWrapper.style.display="none";
    }
}

function windowSize(){
    const width = window.innerWidth;
    const height = window.innerHeight;

    //RED TEXT

    if(width > 800){
        textRed.textContent ="THAT'S WHAT IM SAYING!!";
    }

    if(width < 800){
        textRed.textContent = 'RIGHT??';
    }

    if(height > 1000){
        textRed.textContent = 'NO';
    }

    if(width > 500 && height < 300){
        textRed.innerHTML = `SOMETHING REALLY BIG HAPPENED RECENTLY AND I'VE BEEN DYING TO TELL YOU`;
    }


    textElement.style.transform = 'scale(1)';
    const textWidth = textElement.offsetWidth;
    const textHeight = textElement.offsetHeight;
    const widthFactor = Math.round((width/textWidth)*100)/100;
    const heightFactor = Math.round((height/textHeight)*100)/100;
    
    textElement.style.transform = `scale(${widthFactor}, ${heightFactor})`;

    //BLUE TEXT

    if(width < 800){
        textBlue.innerHTML = `THAT'S JUST<br>WHAT I HEARD<br>THOUGH`;
    }

    if(width > 800){
        textBlue.innerHTML ="LISTEN CLOSELY";
    }

    

    if(width > 1000){
        textBlue.innerHTML =`WHAT<br>DID<br>YOU<br>JUST<br>TELL ME?`;
    }

    if(width > 1200){
        textBlue.inner = `PROMISE NOT TO <br> TELL ANYONE?`
    }

    if(height < 300){
        if(width > 1200){
            textBlue.innerHTML = `YES`;
        }
    }

    else if(width > 1600){
        textBlue.innterHTML = `THERE'S NO WAY.`;
    }

    textElement1.style.transform = 'scale(1)';
    const textWidth1 = textElement1.offsetWidth;
    const textHeight1 = textElement1.offsetHeight;
    const widthFactor1 = Math.round((width/textWidth1)*100)/100;
    const heightFactor1 = Math.round((height/textHeight1)*100)/100;
    
    textElement1.style.transform = `scale(${widthFactor1}, ${heightFactor1})`;
}
  
windowSize();
windowUpdate();
window.addEventListener('resize', windowSize);
window.addEventListener('resize', windowUpdate);

// $(function(){
//     $("#textResize").hide();
// })