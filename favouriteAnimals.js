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
    // 1. Find the input field matching targetInputId
    let targetInputField = document.getElementById(targetInputId);
    // 2. Get the text value from the input field that we found 
    let foundInputFieldValue = targetInputField.value;
    console.log("Input field value to add to list is: " + foundInputFieldValue);
    // 3. Push the text value into the animals array 
    animals.push(foundInputFieldValue);
    // 4. Recreate the animal list
    createAnimalList();
    // Make sure this function deletes the existing list first!
}

let fakeFormButton = document.getElementById("fakeform-submit");
fakeFormButton.addEventListener("click", (event) => {addAnimalToList(event, "fakeform-addAnimal")});