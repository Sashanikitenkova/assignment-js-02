
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(e) {
    e.preventDefault(); 

    document.querySelector('#my-form').style.background = 'red';  
    document.querySelector('body').classList.add('bg-dark'); 
    document.querySelector('.btn').style.background = 'rgb(89, 43, 81)'; 
    const listItems = document.querySelectorAll('.items li');
    
    listItems.forEach(li => {
        li.style.background = 'rgb(114, 113, 113)';
    })

    const list = document.querySelector('.items');
    const lastLi = list.lastElementChild;

    const changeLi = document.createElement('h1');
    changeLi.textContent = 'Hello';

    list.replaceChild(changeLi, lastLi);
    
});