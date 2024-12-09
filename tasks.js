document.addEventListener('DOMContentLoaded', function () {
    const submit = document.querySelector('#submit');
    const newTask = document.querySelector('#task');

    submit.disabled = true;

    newTask.addEventListener('input', function () {
        submit.disabled = newTask.value.trim() === '';
    });

    document.querySelector('form').onsubmit = function () {
        const taskValue = newTask.value.trim();

        if (taskValue) {
            const listItem = document.createElement('li');
            listItem.textContent = taskValue;
            document.querySelector('#tasks').appendChild(listItem);

            newTask.value = '';
            submit.disabled = true;
        }

        return false;
    };
});
