function getPosInt() {
    let list_num = [];
    while (true) {
        let input = prompt("Enter an integer (a negative integer to quit)");
        
        if (input === "") {
            break;
        }
        let num = Number(input);

        if (isNaN(num)) {
            continue;
        } else if (num < 0) {
            break;
        } else if (Number.isInteger(num)) {
            list_num.push(num);
        } else {
            continue;
        }
    }
    return list_num;
}

function average(list_num) {
    if (list_num.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < list_num.length; i++) {
        sum += list_num[i];
    }
    return sum / list_num.length;
}

function min(list_num) {
    if (list_num.length === 0) {
        return 0;
    }

    let min = list_num[0];
    for (let i = 0; i < list_num.length; i++) {
        if (list_num[i] < min) {
            min = list_num[i];
        }
    }
    return min;
}

function max(list_num) {
    if (list_num.length === 0) {
        return 0;
    }

    let max = list_num[0];
    for (let i = 0; i < list_num.length; i++) {
        if (list_num[i] > max) {
            max = list_num[i];
        }
    }
    return max;
}

let list_num = getPosInt();
let number = average(list_num);
let fixedNum = number.toFixed(2);

if (list_num.length === 0) {
    alert("For the list: that is empty, the average is " + fixedNum + ", the minimum is " + min(list_num) + ", the maximum is " + max(list_num));
} else {
    alert("For the list: " + list_num.join(", ") + ", the average is " + fixedNum + ", the minimum is " + min(list_num) + ", the maximum is " + max(list_num));
}
