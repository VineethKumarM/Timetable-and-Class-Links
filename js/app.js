// prompt("HEllo")
const form = document.querySelector('form');
const list = document.querySelector('#list');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const assign = form.elements.Aname;
    const sub = form.elements.sbj;
    const date = form.elements.date;
    addItem(assign.value,sub.value,date.value)
    assign.value=''
    sub.value = ''
    date.value = ''
})

const addItem= (prdt,quan,date) => {
    const item = document.createElement('li')
    item.innerText = `${quan} ${prdt} Due on ${date}`;
    list.appendChild(item)
}