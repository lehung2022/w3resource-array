let x = 0;
const array = Array();

function add_element_to_array() {
    array[x] = document.getElementById("text1").value;
    alert(`Element: ${array[x]} Added at index ${x}`);
    x++;
    document.getElementById("text1").value = "";
}

function display_array() {
    let e = "<hr/>";

    for (let y = 0; y < array.length; y++) {
        e += `Element ${y} = ${array[y]}<br/>`;
    }
    document.getElementById("Result").innerHTML = e;
}
