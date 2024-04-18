let animals = [
    "fennec fox",
    "lobster",
    "frog",
    "crocodile",
    "dog",
    "monkey",
    "manta ray",
    "horse",
    "red panda",
    "conure",
    "lizard",
    "koala bear",
    "drop bear",
    "whale shark",
    "lion",
    "turtle",
    "otter"
];

function createAnimalList(){

    animals = [...new Set(animals)];
    
    let rootOlNode = document.querySelector("ol");
    rootOlNode.innerHTML = "";

    animals.forEach((animal) => {
        console.log("Animal: "+ animal);

        let newList = document.createElement("li");
        newList.textContent = animal;
        newList.id = animal;

        let removeItemButton = document.createElement("button");

        removeItemButton.textContent = "Remove Animal";
        removeItemButton.onclick = () => removeAnimalFromList(animal);

        newList.appendChild(removeItemButton);

        
        rootOlNode.appendChild(newList);
    });
}

function removeAnimalFromList(targetAnimalId){
    let targetListItem = document.getElementById(targetAnimalId);
    targetListItem.remove();

    let isAnimalInList = animals.includes(targetAnimalId);
    if (!isAnimalInList) return;

    animals = animals.filter(animal => {
        if (targetAnimalId == animal){
            return false;
        }
        else {
            return true;
        }
    });

}


function addAnimalToList(event, targetInputId){
    // Disable default event of real form
    event.preventDefault();

    // 1. Find the input field matching targetInputId
    let targetInputField = document.querySelector(targetInputId);

    // 2. Get the text value from the input field that we found 
    let foundInputFieldValue = targetInputField.value;
    console.log("Input field value to add to list is: " + foundInputFieldValue);

    //2.5 Validation - Check if input is empty
    if(!foundInputFieldValue){
        alert("Empty value, not adding to the list")
        return;
    }

    // 3. Push the text value into the animals array 
    animals.push(foundInputFieldValue);

    // 3.5 Reset input field
    targetInputField.value = "";

    // 4. Recreate the animal list
    createAnimalList();
    
}

let fakeFormButton = document.querySelector("#fakeform-submit");
let realFormButton = document.querySelector("#realform-submit");

fakeFormButton.addEventListener("click", (event) => {addAnimalToList(event, "#fakeform-addAnimal")});
realFormButton.addEventListener("click", (event) => {addAnimalToList(event, "#realform-addAnimal")});


function inputHelperReveal(targetElementId){
    let hintElement = document.querySelector(targetElementId);
    hintElement.style.display = "inherit";
}
function inputHelperHide(targetElementId){
    let hintElement = document.querySelector(targetElementId);
    hintElement.style.display = "none";
}

let realFormInput = document.getElementById("realform-addAnimal");
realFormInput.addEventListener("focusin", () => {inputHelperReveal("#realform-hint")});
realFormInput.addEventListener("focusout", () => {inputHelperHide("#realform-hint")});

let fakeFormInput = document.getElementById("fakeform-addAnimal");
fakeFormInput.addEventListener("focusin", () => {inputHelperReveal("#fakeform-hint")});
fakeFormInput.addEventListener("focusout", () => {inputHelperHide("#fakeform-hint")});

inputHelperHide("realform-hint");
inputHelperHide("fakeform-hint");