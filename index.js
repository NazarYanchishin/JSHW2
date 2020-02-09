let n = +prompt('Введіть число N', 0);
let m = +prompt('Введіть число М', 0);

let sum = 0;
if (m < n){
    alert('EROR');
}
else { if (parseInt(n) != n) {
    n = NaN;
    alert('EROR');
}
else { if (parseInt(m) != m) {
    m = NaN;
    alert('EROR');
}
else { let trueFalse = confirm('Потрібно пропускати парні числа?');
    if (trueFalse) {

        for (let i = n; i <= m; i++) {
            if (i % 2 !== 0)
                sum += i;
        }
    } else { for (let i = n; i <= m; i++) {
        sum += i;
    }
    }
}
}
}
console.log(sum);



