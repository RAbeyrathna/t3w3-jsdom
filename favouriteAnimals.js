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
    

    animals.forEach((animal) => {
        console.log("Animal: "+ animal);

        let newList = document.createElement("li");
        newList.textContent = animal;
        newList.id = animal;

        let removeItemButton = document.createElement("button");

        removeItemButton.textContent = "Remove Animal";
        removeItemButton.onclick = () => removeAnimalFromList(animal);

        newList.appendChild(removeItemButton);

        let rootOlNode = document.querySelector("ol");
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