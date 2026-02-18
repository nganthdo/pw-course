let height = 153;
if (height > 100) {
    let number = height.toString().slice(-2);
    //console.log("Number:" + number);
    const ideal_weight = parseInt(number) * 9 / 10;
    //console.log("Your ideal weight is: " + ideal_weight);
    const max_weight = parseInt(number);
    const min_weight = parseInt(number) * 8 / 10;
    console.log("Ideal weight: " + ideal_weight + " , Min weight: " + min_weight + " , Max weight: " + max_weight);
}
else {
    console.log("This calculator is only for people taller than 100 cm.");
}
