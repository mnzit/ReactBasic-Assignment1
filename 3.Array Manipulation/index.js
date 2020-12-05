let favPlaces = ["Biratnagar", "Lalitpur", "Patan", "Kathmandu", "Pokhara", "Palpa"];

function removeByElementByIndex(array, index) {
    array.splice(index, 1);
}

removeByElementByIndex(favPlaces, favPlaces.indexOf("Kathmandu"));
console.log(`favorite places length : ${favPlaces.length}`);