let num = Number(prompt("Введите число:"));

// if
if (num > 0) {
    alert("Число положительное");
}
else if (num < 0) {
    alert("Число отрицательное");
}
else {
    alert("Число равно нулю");
}

// switch
let day = Number(prompt("Введите номер дня недели (1-7):"));

switch (day) {
    case 1:
        alert("Понедельник");
        break;

    case 2:
        alert("Вторник");
        break;

    case 3:
        alert("Среда");
        break;

    default:
        alert("Другой день недели");
}

// for + continue + break
console.log("Цикл for:");

for (let i = 1; i <= 10; i++) {

    if (i == 3) {
        continue;
    }

    if (i == 8) {
        break;
    }

    console.log(i);
}

// while
console.log("Цикл while:");

let a = 1;

while (a <= 3) {
    console.log(a);
    a++;
}

// do...while
console.log("Цикл do...while:");

let b = 1;

do {
    console.log(b);
    b++;
}
while (b <= 3);

// return
function square(x) {
    return x * x;
}

alert("Квадрат введённого числа: " + square(num));