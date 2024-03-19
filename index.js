let storedimages = [
    "images/arsenal-shirt-2024.webp",
    "images/barcelona-shirt-2024.webp", 
    "images/bayern-shirt-2024.jpg", 
    "images/dortmund-shirt-2024.webp",
    "images/inter-milan-shirt-2024.webp",
    "images/juventus-shirt-2024.webp",
    "images/liverpool-shirt-2024.jpg",
    "images/manchester-city-shirt-2024.webp",
    "images/manchester-utd-shirt-2024.webp",
    "images/milan-shirt-2024.webp",
    "images/psg-shirt-2024.webp",
    "images/real-madird-shirt-2024.webp",
]

let jerseyNumber = document.querySelector('.jersey-number');
let i = 0;
let jerseyNumbers = 1;
let image = document.createElement('img');
image.setAttribute("src", storedimages[i]);
let masterImage = document.querySelector('.images');
masterImage.appendChild(image);

image.classList.add("team-jerseys");

let moveRight = document.querySelector('.arrow-right');

moveRight.addEventListener("click", () => {
    i++;
    if(storedimages[i] != null) {
        image.setAttribute("src", storedimages[i]);
        masterImage.appendChild(image);
        jerseyNumbers += 1;
    } else {
        i = 0;
        jerseyNumbers = 1;
        image.setAttribute("src", storedimages[i]);
        masterImage.appendChild(image);
    }
    jerseyNumber.textContent = `Camisa: ${jerseyNumbers}`
})

let moveLeft = document.querySelector('.arrow-left');

moveLeft.addEventListener("click", () => {
    i--;
    if(storedimages[i] != null) {
        image.setAttribute("src", storedimages[i]);
        masterImage.appendChild(image);
        jerseyNumbers -= 1;
    } else {
        i = storedimages.length - 1;
        jerseyNumbers = storedimages.length;
        image.setAttribute("src", storedimages[i]);
        masterImage.appendChild(image);
    }
    jerseyNumber.textContent = `Camisa: ${jerseyNumbers}`
})

let evaluate = document.querySelector('.btn');

evaluate.addEventListener("click", () => {
    let showBestJersey = document.createElement('img');
    let bestJersey = document.querySelector('.best-jersey');

    let userOption = Number(prompt("Qual é a melhor camisa?\n1-Arsenal\n2-Barcelona\n3-Bayern de Munique\n4-Borussia Dortmund\n5-Inter de Milão\n6-Juventus\n7-Liverpool\n8-Manchester City\n9-Manchester United\n10-Ac-Milan\n11-Paris Saint-Germain\n12-Real Madrid"));

    switch(userOption) {
        case 1:
           alert("Camisa escolhida: Arsenal");
            break;
        case 2:
            alert("Camisa escolhida: Barcelona");
            break;
         case 3:
            alert("Camisa escolhida: Bayern de Munique");
            break;
        case 4:
            alert("Camisa escolhida: Borussia Dortmund");
            break;
        case 5:
            alert("camisa escolhida: Inter de Milão");
            break;
        case 6:
            alert("camisa escolhida: Juventus");
            break;
        case 7:
            alert("Camisa escolhida: Liverpool");
            break;
        case 8:
            alert("Camisa escolhida: Manchester City");
            break;
        case 9:
            alert("Camisa escolhida: Manchester United");
            break;
        case 10:
            alert("Camisa escolhida: Milan");
            break;
        case 11:
            alert("camisa escolhida: Paris Saint-Germain");
            break;
        case 12:
            alert("Camisa escolhida: real Madrid");
            break;
        default:
            alert("Opção inválida!");
            break;
    }
    
    userOption = userOption - 1;
    showBestJersey.setAttribute("src", storedimages[userOption]);
    showBestJersey.classList.add("best-jersey-show");
    bestJersey.appendChild(showBestJersey);  

    let footer = document.querySelector('footer');

    let removeButton = document.querySelector('.remove');

    removeButton.addEventListener("click", () => {
        showBestJersey.remove();
    })

})