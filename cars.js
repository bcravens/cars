const key = [
    "Black", 
    "Red", 
    "Orange", 
    "Yellow", 
    "Green", 
    "Blue", 
    "Purple" 
];

function color(days) {
    const day = new Date().getDay();

    const check = (day + days) % 7; 
    if (check == 0 || check == 6) return null; // sat/sun

    const skipped = Math.floor((days + day) / 7) * 2; // days skipped
    const remainder = (days - skipped) % 7; // leftover days
    const i = (day + remainder) % 7; // starting day + leftovers % 7 to find index
    return key[i];
}

console.log(color(30));