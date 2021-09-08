// 1. Исправьте код чтоб возращался обьект {total: 100}

	const countTotal = () => ({total: 100});
    
    let a = countTotal();
    console.log(a);

  // 2.Исправьте код чтоб выводило сегодняшнюю дату

    const result = `Today is ${new Date}`
    console.log(result);

// 3. Напишите код с помощью которого можно поменять значениях двух 
// переменных друг с другом (без дополнительной переменной). 
// Т.е. было: a = 2, b = 3, стало: a = 3, b = 2; (подсказка: destructurization)

let a = 2, 
    b = 3;

[a, b] = [b, a];
console.log(a);
console.log(b);

 