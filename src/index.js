import './page/index.css';

const buttonOpen = document.querySelector(".main__title_button");
const buttonClose = document.querySelector('.popup__buttonClose');
const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__form');
const popupButton = document.querySelector('.popup__button');
const test =Array.from(form.querySelectorAll('.test'));
const headerPhone = document.querySelector('.header__menu_phone');
const popupMenuPhone = document.querySelector('.popup__menu');
const menuButtonPhone = document.querySelector('.header__menu_phone-button');
const buttonOP = document.querySelector('.header__menu_phone-buttonClose');
const kosmet = document.querySelectorAll('.header__menu_item');
const indi = document.querySelectorAll('.header__menu_down-indik');
const menu =Array.from(document.querySelectorAll('.header__menu_down'));
const bgBlur = document.querySelector('.bg-blur');
const imputs = document.querySelectorAll('.popup__input');
const check = document.querySelector('.popup__input_check');
//Валидация
function someInput(){
    return !test.some((inp)=>!inp.validity.valid);
}
function validate (elem,inp){
    document.querySelectorAll('.popup__error');
    if(elem.validity.valid){
        const errors=document.querySelectorAll(`#${inp}-error`);
        const goods = document.querySelectorAll(`#${inp}-good`)
        goods[0].classList.add('popup__error_open');
        goods[0].classList.remove('popup__error_hidden');
        errors.forEach(element=>{
            element.classList.remove('popup__error_open');
            element.classList.add('popup__error_hidden');
        })
        
    }
    else{
        const errors=document.querySelectorAll(`#${inp}-error`);
        const goods = document.querySelectorAll(`#${inp}-good`)
        errors.forEach(element=>{
            element.classList.add('popup__error_open');
            element.classList.remove('popup__error_hidden');
        })
    };
}
// Открытие формы и присваиваине обработчиков
function openPopup(selec){
    headerPhone.style.background = 'white';
    if(window.innerWidth<=961){
        headerPhone.classList.add('header__menu_phone-white');
    }
    selec.classList.add('popup__open');
    document.addEventListener("keydown", (evt)=>{
        if(evt.key=='Escape')
        closePopup(popup);
    });
    imputs.forEach(element => {
        element.addEventListener('input',()=>{
            const inp = element.classList;
            if(someInput()){
                console.log(popupButton);
                popupButton.classList.remove('popup__button_disablet');
                popupButton.removeAttribute("disabled");
            }
            else{
                popupButton.classList.add('popup__button_disablet');
                popupButton.setAttribute("disabled", true);
            }
            validate(element,inp[0]);
        });
    });
    check.addEventListener('input', ()=>{
        if(someInput()){
            console.log(popupButton);
            popupButton.classList.remove('popup__button_disablet');
            popupButton.removeAttribute("disabled");
        }
        else{
            popupButton.classList.add('popup__button_disablet');
            popupButton.setAttribute("disabled", true);
        }
    })
};
//Закрытие формы
function closePopup(selec){
    headerPhone.style.background = '';
    selec.classList.remove('popup__open');
    document.removeEventListener("keydown", (evt)=>{
        if(evt.key=='Escape')
        closePopup(popup);
    });
    if(window.innerWidth<=961){
        headerPhone.classList.remove('header__menu_phone-white');
    }
};
//Открыть закрыть попап
buttonOpen.addEventListener('click',()=>{
    openPopup(popup);
});
buttonClose.addEventListener('click',()=>{
    closePopup(popup);
});
popup.addEventListener('click',(evt)=>{
    if(evt.target.classList[0]==='popup')
    closePopup(popup);
})
//Сабмит формы
form.addEventListener('submit',(evt)=>{
    evt.preventDefault();
    closePopup(popup);
})
// Затемнение экрана
window.addEventListener('scroll',()=>{
    bgBlur.style.opacity = pageYOffset/350;
    if(bgBlur.style.opacity>0.99){
        bgBlur.style.opacity=0.999;
        headerPhone.classList.add('header__menu_phone-white');
    }
    else{
        headerPhone.classList.remove('header__menu_phone-white');
    }

})
//Ховер на меню
function addHoverMenu(selecName,selecMenu,ind){
    selecName.addEventListener('mouseover',()=>{
        selecMenu.style.display='block';
        selecName.querySelector('.header__menu_item-text').style.color='pink';
        const x = selecName.getBoundingClientRect().left
        ind.style.left= x+70+'px';
        ind.style.top=-11+'px';
    })
    selecName.addEventListener('mouseleave',()=>{
        selecMenu.style.display='none';
        selecName.querySelector('.header__menu_item-text').style.color='black';
    })
}
//Присваивание всем пунктам меню
for(var i=0;i<=2;i++){
    addHoverMenu(kosmet[i],menu[i],indi[i]);
}
//Меню телефон
menuButtonPhone.addEventListener('click',()=>{
    popupMenuPhone.classList.add('popup__open_phone');
    headerPhone.style.background = 'white';
    buttonOP.classList.add('header__button_open');
    menuButtonPhone.classList.add('header__button_close');
})
buttonOP.addEventListener('click',()=>{
    popupMenuPhone.classList.remove('popup__open_phone');
    headerPhone.style.background = '';
    buttonOP.classList.remove('header__button_open');
    menuButtonPhone.classList.remove('header__button_close');
})