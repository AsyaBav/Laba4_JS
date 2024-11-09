function nameAge() {

        const name = prompt("Введите ваше имя:");
        const age = parseInt(prompt("Введите ваш возраст:"));

    let ageCategory = "";

    if (age >= 1 && age <= 17) {
        ageCategory = "ребёнок";
    } else if (age >= 18 && age <= 30) {
        ageCategory = "молодой(-ая)";
    } else if (age >= 31 && age <= 55) {
        ageCategory = "зрелый(-ая)";
    } else {
        ageCategory = "старый(-ая)";
    }

    alert(`${name} имеет возраст ${age} и он(-а) ${ageCategory}.`);

}