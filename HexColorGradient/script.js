function changeColor() {
    let hex_number = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9", "A" ,"B" ,"C" ,"D" ,"E" ,"F"];
    let hexcode_left = '';
    let hexcode_right = '';

    for (let i=0; i < 6; i++) {
        let random_index = Math.floor(Math.random() * hex_number.length);

        hexcode_left  += hex_number[random_index]
    }

    for (let j=0; j < 6; j++) {
        let random_index = Math.floor(Math.random() * hex_number.length);

        hexcode_right += hex_number[random_index]
    }

    document.getElementById("hex-gradient").innerHTML = "linear-gradient(#" + hexcode_left + ", #" + hexcode_right + ")";
    document.getElementsByTagName("body")[0].style.background = "linear-gradient(#" + hexcode_left + ", #" + hexcode_right + ")"
        // background = "#" + hexcode;
}