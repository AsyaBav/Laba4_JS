function outputOfNumbers() {
    const isConfirm = confirm("Хотите увидеть возрастные категории для чисел от 1 до 100?");

    if (isConfirm) {
        for (let i = 1; i <= 100; i++) {
            let ageDesignation = "";

            if (i >= 1 && i <= 17) {
                ageDesignation = "Ребёнок";
            } else if (i > 17 && i <= 30) {
                ageDesignation = "Молодой";
            } else if (i > 30 && i <= 55) {
                ageDesignation = "Зрелый";
            } else {
                ageDesignation = "Старый";
            }

            alert(`${i} - ${ageDesignation}`);
        }
    } else {
        alert("Отмена");
    }
}