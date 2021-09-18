let n = Math.floor(Math.random() * 100);
let rand = Math.floor(Math.random() * n);
while (true) {
    let x = prompt("Input a number from 0 to " + n + " or ! for exit");
    if (x == "!") {
        alert("Bye!");
        break;
    } else if (isNaN(x)) {
        alert("No! >:0");
        break;
    } else if (x == rand) {
        alert("You win! :)");
        break;
    } else if (x > rand) {
        alert("Too many :(");
    } else {
        alert("Too small :(");
    }
}