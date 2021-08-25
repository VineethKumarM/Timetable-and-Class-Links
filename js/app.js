// prompt("HEllo")
const form = document.querySelector('form');
const list = document.querySelector('#list');
// const input = document.querySelector('#Aname');

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 

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