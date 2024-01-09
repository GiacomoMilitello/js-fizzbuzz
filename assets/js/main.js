const ul = document.querySelector('ul.list');
        for (let i = 0; i <= 100; i++) {
            const element = document.createElement('li');
            if (i % 3 === 0 && i % 5 === 0) {
                element.innerText = 'fizzbuzz';
            } else if (i % 3 === 0) {
                element.innerText = 'fizz';
            } else if (i % 5 === 0) {
                element.innerText = 'buzz';
            } else {
                element.innerText = i;
            }
            ul.appendChild(element);
        }