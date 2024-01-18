// app.js
const source = document.getElementById('template').innerHTML;
const template = Handlebars.compile(source);

const data = {
    title: 'Hello, Handlebars!',
    content: 'This is a simple example.',
};

document.getElementById('app').innerHTML = template(data);
