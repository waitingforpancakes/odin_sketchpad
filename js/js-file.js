let size = 4;
const body = document.querySelector('body');

function makeGrid(){
    for (let i = 0; i < size; i++){
        const newDivContainer = document.createElement('div');
        newDivContainer.style.display = 'flex';
        newDivContainer.setAttribute('id', `row${i}`)
        for (let j = 0; j < size; j++){
            const newDiv = document.createElement('div');
            newDiv.style.backgroundColor = "rgba(140, 150, 255, 0.2)";
            newDiv.style.height = `calc((100vh - 100px)/${size})`;
            newDiv.style.width = `calc((100vh - 100px)/${size})`;
            newDiv.classList.add(`row${i}`);
            newDiv.addEventListener('mouseover', function() {
                console.log(newDiv.style.backgroundColor);
                if (newDiv.style.backgroundColor == "rgba(140, 150, 255, 0.2)"){
                    let r = Math.random() * (255 - 100) + 100;
                    let g = Math.random() * (255 - 100) + 100;
                    let b = Math.random() * (255 - 100) + 100;
                    newDiv.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;
                } else {
                    let colorList = newDiv.style.backgroundColor.substring(newDiv.style.backgroundColor.indexOf('(') + 1, newDiv.style.backgroundColor.length - 1).split(', ');
                    console.log(colorList);
                    let r = +(colorList[0])/2;
                    let g = +(colorList[0])/2;
                    let b = +(colorList[0])/2;
                    newDiv.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;
                }
            });
            
            newDivContainer.appendChild(newDiv);
        }
        body.appendChild(newDivContainer);
    }
}

function clearGrid(){
    for (let i = 0; i < size; i++){
        const div = document.querySelector(`#row${i}`);
        const divs = document.querySelectorAll(`div.row${i}`);
        divs.forEach((child) => div.removeChild(child));
        body.removeChild(div);
    }
}

makeGrid();

const clear = document.querySelector('button');
clear.addEventListener('click', function () {
    let temp = +(prompt('Enter the number of sides for the new grid (max: 100)')); 
    if (typeof temp == 'number' && temp <= 100) {
        clearGrid();
        size = temp;
        makeGrid();
    } 
}); 
