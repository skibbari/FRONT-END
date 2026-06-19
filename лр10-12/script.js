function calcY(x) {

    if ((x * x - 1) == 0) {
        alert("Ошибка! Деление на ноль.");
        return null;
    }

    let y = Math.abs(x - 2) / (x * x - 1);

    return y;
}
