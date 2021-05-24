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

function addCard(board,title,text,people,time,color){
    const card = document.getElementById('card').content.cloneNode(true);
    card.querySelector('.tasks__title').textContent=title;
    card.querySelector('.tasks__text').textContent=text;
    card.querySelector('.tasks__people').textContent=people;
    card.querySelector('.tasks__time').textContent=time;
    card.querySelector('.tasks').style.background = color;
    card.querySelector('.tasks__delete').addEventListener(('click'),(evt)=>{
        evt.target.parentNode.parentNode.remove();
    });
    new Draggabilly(card.querySelector('.tasks'),{
        containment: '.main__board_column'
    });
    board.append(card);
}

function openPopup(pop){
    pop.classList.add('popup__open');
}

function closePopup(pop){
    pop.classList.remove('popup__open');
}

function checkRadio(){
    if(tasksBoard[0].checked){
        addCard(boardLeft,tasksName.value,tasksText.value,tasksNamePeople.value,tasksTime.value,tasksColor.value);
    }
    else if(tasksBoard[1].checked){
        addCard(boardCenter,tasksName.value,tasksText.value,tasksNamePeople.value,tasksTime.value,tasksColor.value);
    }
    else if(tasksBoard[2].checked){
        addCard(boardRight,tasksName.value,tasksText.value,tasksNamePeople.value,tasksTime.value,tasksColor.value);
    }
}

buttonSub.addEventListener('click',()=>{
    checkRadio();
    console.log(tasksColor.value);
    closePopup(popup);
})
button.addEventListener('click',()=>{
    openPopup(popup);
})
buttonClose.addEventListener('click',()=>{
    closePopup(popup);
})
addCard(boardLeft,"Задание 1","Надо выполнить задание 1","Выполнит: Морозов Артем Алексеевич","с 21.02.13 по 22.03.14",'white');

