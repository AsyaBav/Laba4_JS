function showDaysOfWeek() {
    const dayNumber = parseInt(prompt("Введите число от 1 до 7:"));

    let dayName = "";

    switch (dayNumber) {
        case 1: dayName = "Понедельник"; break;
        case 2: dayName = "Вторник"; break;
        case 3: dayName = "Среда"; break;
        case 4: dayName = "Четверг"; break;
        case 5: dayName = "Пятница"; break;
        case 6: dayName = "Суббота"; break;
        case 7: dayName = "Воскресенье"; break;
        default: dayName = "Неверное число. Введите число от 1 до 7.";
    }

    alert(`День недели: ${dayName}`);
}