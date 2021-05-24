import './page/index.css';


const boardLeft = document.querySelector(".left");
const boardCenter = document.querySelector('.center');
const boardRight = document.querySelector('.right');
const button = document.querySelector('.main__button');
const buttonClose = document.querySelector('.popup__buttonClose');
const popup = document.querySelector('.popup');
const buttonSub = document.querySelector('.popup__button');
const tasksName = document.querySelector('.tasksName');
const tasksText = document.querySelector('.text');
const tasksNamePeople = document.querySelector('.name');
const tasksTime = document.querySelector('.time');
const tasksColor = document.querySelector('.color');
const tasksBoard = document.querySelectorAll('.popup__radio');
const boards = Array.from(document.querySelectorAll('.main__board_column-tasks'));

function addCard(obj){
    const card = document.getElementById('card').content.cloneNode(true);
    
    card.querySelector('.tasks__title').textContent= obj.questName||'Задание '+obj.id;
    card.querySelector('.tasks__text').textContent=obj.title;
    card.querySelector('.tasks__people').textContent= obj.userName || 'Артем Алексеевич';
    card.querySelector('.tasks__time').textContent=  obj.time ||  new Date();
    card.querySelector('.tasks').style.background = obj.color || 'white';
    card.querySelector('.tasks__delete').addEventListener(('click'),(evt)=>{
        evt.target.parentNode.parentNode.remove();
    });
    new Draggabilly(card.querySelector('.tasks'),{
        containment: '.main__board_column'
    });
    if(obj.completed==='in progress')
    {
        boards[1].append(card);
    }else
    if(obj.completed){
        boards[0].append(card);
    }
    else
    if(!obj.completed){
        boards[2].append(card);
    }
}

function openPopup(pop){
    pop.classList.add('popup__open');
}

function closePopup(pop){
    pop.classList.remove('popup__open');
}

function checkRadio(){
        const objAssignee = {
            "questName" : tasksName.value ,
            "title": tasksText.value,
            "userName": tasksNamePeople.value,
            "time" : tasksTime.value,
            "color": tasksColor.value,
            "completed": ''
        }
    if(tasksBoard[0].checked){
        objAssignee.completed = true;
    }
    else if(tasksBoard[1].checked){
        objAssignee.completed = "in progress";
    }
    else if(tasksBoard[2].checked){
        objAssignee.completed = "fasle";
    }
    console.log(objAssignee);
    addCard(objAssignee);
}

buttonSub.addEventListener('click',()=>{
    checkRadio();
    closePopup(popup);
})
button.addEventListener('click',()=>{
    openPopup(popup);
})
buttonClose.addEventListener('click',()=>{
    closePopup(popup);
})/*
addCard(boardLeft,"Задание 1","Надо выполнить задание 1",'white');*/

for(let i=0;i<=9;i++){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => addCard(json[i]))
}
