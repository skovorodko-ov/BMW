const server = 'https://jsonplaceholder.typicode.com/posts';

const sendData = (data, callBack, falseCallBack) => {
    const request = new XMLHttpRequest();
    request.open('POST', server);

    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) return;
        if (request.status === 200 || request.status === 201) {
            const response = JSON.parse(request.responseText);
            callBack(response.id);
        } else {
            falseCallBack(request.status)
            throw new Error(request.status)
        }
    });

    request.send(data)
};

const formElems = document.querySelectorAll('.form');

const formHandler = (form) => {
    const smallElem = document.createElement('small');
    form.append(smallElem);
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = {};

        for (const {name, value} of form.elements) {
            if (name) {
                data[name] = value
                if (!value.trim()) {
                    smallElem.textContent = 'Заполните все данные';
                    smallElem.style.color = 'red';
                    return;
                };
            }
        }

        sendData(JSON.stringify(data), 
        (id) => {
            smallElem.textContent = 'Ваша заявка номер ' + id + 
                        '! \nВближайшее время с вами свяжемся'; 
            smallElem.style.color = 'green';
        },
        (err) => {
            smallElem.textContent = 'Технические неполаки, попробуйте позже';
            smallElem.style.color = 'red';
            // form.append(smallElem);
        });
        form.reset();
    })
}

formElems.forEach(formHandler)


