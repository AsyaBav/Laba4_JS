function definitionOfGender() {
    const gender = prompt("Введите ваш пол ('M' - мужской, 'F' - женский):");

    if (gender === 'M') {
        alert("Ваш пол мужской");
    } else if (gender === 'F') {
        alert("Ваш пол женский");
    } else {
        alert("Ваш пол не определён");
    }
}