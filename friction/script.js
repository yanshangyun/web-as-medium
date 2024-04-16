const inputField = document.getElementById('firstName');
const nameCenter = document.getElementById('nameCenter');
const centerDiv = document.getElementById('center');
const answer = document.getElementById('answer');
const container = document.getElementById('container');
const header = document.getElementById('header');
const width = window.innerWidth;

const degree = width / 400;

const words = ["probably loves", "doesn't love", "sometimes loves", "usually loves", "might love", "will love", "should love", "used to love", "must love", "can love", "has to love", "won't love", "can't love", "needs to love", "shouldn't love", "seems to love", "doesn't want to love", "wouldn't love", "rarely loves", "is afraid to love", "no longer loves", "will never love", "never loves", "never loved", "once loved", "barely loves", "secretly loves", "reluctantly loves", "silently loves", "wants to love", "loves", "really loves"];

const loveElements = 500;

const animationDuration = 40;

function vortex(){
    for (let i = 0; i < loveElements; i++) {
        const boxContainer = document.createElement('div'); // create item-container
        boxContainer.className = 'item-container';
    
        const box = document.createElement('div'); // create item
        box.className = 'item';
    
        const randomDegreeOffset = Math.floor(Math.random() * 61) - 30;
        const individualRotation = Math.floor(Math.random() * 361) - 180;
        const randomSkew = Math.floor(Math.random() * 61) - 30;
        const randomBlur = Math.floor(Math.random() * 4);
        const randomScale = (Math.floor(Math.random() * 21 + 10) / 10);
    
        boxContainer.appendChild(box); // put item into item-container
        container.appendChild(boxContainer); // put item-container into container
    
        // 0%
        box.style.transform = 'rotate(0deg)';
        box.style.filter = 'blur(0px)';
        box.style.lineHeight = '20px';
        boxContainer.style.transform = `translateX(0px)`;
    
        void box.offsetWidth;
    
        // animation
        box.style.transitionProperty = 'transform, filter';
        box.style.transitionDuration = `${animationDuration}s`;
        box.style.transitionTimingFunction = 'cubic-bezier(0.8,0,0.2,1)';
    
        boxContainer.style.transitionProperty = 'transform';
        boxContainer.style.transitionDuration = `${animationDuration}s`;
        boxContainer.style.transitionTimingFunction = 'cubic-bezier(0.8,0,0.2,1)';
    
        // 100%
        box.style.transitionDelay = '5s';
        box.style.transform = `rotate(${i * degree - randomDegreeOffset + individualRotation}deg) skew(${randomSkew}deg, ${randomSkew}deg) scale(${randomScale})`;
        // box.style.transform = `rotate(${i * degree - randomDegreeOffset + individualRotation}deg) skew(${randomSkew}deg, ${randomSkew}deg)`;
        box.style.filter = `blur(${randomBlur}px)`;
        //boxContainer.style.transform = `scale(${randomScale}`;
    }

    function updateBoxContent() {
        const inputValue = inputField.value || '';
        const boxes = document.querySelectorAll('.item');
        
        boxes.forEach((box, i) => {
            const wordsIndex = Math.floor(Math.random() * words.length);
            box.innerHTML = `${inputValue} ` + `${words[wordsIndex]}` + " me";
        });
    
        nameCenter.innerHTML = inputValue;
    }

    inputField.addEventListener('input', updateBoxContent);

    updateBoxContent();
}

document.addEventListener('keypress', function(event) {
    if (event.key =='Enter') {
      header.style.display = 'none';
      container.style.display = 'flex';
      centerDiv.style.display = "block";
      vortex();

      setTimeout(fadeOutAllExceptOne, 30000);
    }
});


function fadeOutAllExceptOne() {
    const indexToKeep = Math.floor(Math.random() * loveElements);
    const boxes = document.querySelectorAll('.item');

    boxes.forEach((box, i) => {
        if (i !== indexToKeep) {
            box.style.transition = 'opacity 5s';
            box.style.opacity = 0;
            answer.style.transition = 'opacity 5s';
            answer.style.opacity = '100%';
            setTimeout(() => box.remove(), animationDuration * 1000);
        }
    });
}

// document.addEventListener('DOMContentLoaded', (event) => {
//     const boxes = document.querySelectorAll('.box');
//     let draggedItem = null;

//     boxes.forEach(box => {
//         box.addEventListener('dragover', e => {
//             e.preventDefault();
//             box.classList.add('hovered');
//         });

//         box.addEventListener('dragleave', () => {
//             box.classList.remove('hovered');
//         });

//         box.addEventListener('drop', () => {
//             if (draggedItem) {
//                 box.appendChild(draggedItem);
//             }
//             box.classList.remove('hovered');
//         });
//     });

//     const items = document.querySelectorAll('.item');
//     items.forEach(item => {
//         item.addEventListener('dragstart', () => {
//             draggedItem = item; // remember
//         });

//         item.addEventListener('dragend', () => {
//             draggedItem = null; // clear
//         });
//     });
// });
