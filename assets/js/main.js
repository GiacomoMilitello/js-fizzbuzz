const ul = document.querySelector('ul.list');
        for (let i = 1; i <= 100; i++) {
            const element = document.createElement('li');
            if (i % 3 === 0 && i % 5 === 0) {
                element.innerText = 'fizzbuzz';
                element.classList.add('bg-danger', 'ratio', 'd-flex', 'justify-content-center', 'align-items-center');
            } else if (i % 3 === 0) {
                element.innerText = 'fizz';
                element.classList.add('bg-success', 'ratio', 'd-flex', 'justify-content-center', 'align-items-center');
            } else if (i % 5 === 0) {
                element.innerText = 'buzz';
                element.classList.add('bg-warning', 'ratio', 'd-flex', 'justify-content-center', 'align-items-center');
            } else {
                element.innerText = i;
                element.classList.add('bg-primary', 'ratio', 'd-flex', 'justify-content-center', 'align-items-center');
            }
            ul.appendChild(element);
        }