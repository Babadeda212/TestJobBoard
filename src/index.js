import './page/index.css';

const buttonOpen = document.querySelector(".main__title_button");
const buttonClose = document.querySelector('.popup__buttonClose');
const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__form');
const popupButton = document.querySelector('.popup__button');
const test =Array.from(form.querySelectorAll('.test'));
const headerPhone = document.querySelector('.header__menu_phone');


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

function openPopup(selec){
    if(window.innerWidth<=961){
        headerPhone.classList.add('header__menu_phone-white');
    }
    selec.classList.add('popup__open');
    document.addEventListener("keydown", (evt)=>{
        if(evt.key=='Escape')
        closePopup(popup);
    });

    const imputs = document.querySelectorAll('.popup__input');
    const textAr =document.querySelector('.popup__input_text');
    const check = document.querySelector('.popup__input_check');

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

    textAr.addEventListener('input',()=>{
        const inp = textAr.classList;
        validate(textAr,inp[0]);
        if(someInput()){
            console.log(popupButton);
            popupButton.classList.remove('popup__button_disablet');
            popupButton.removeAttribute("disabled");
        }
        else{
            popupButton.classList.add('popup__button_disablet');
            popupButton.setAttribute("disabled", true);
        }
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
function closePopup(selec){
    selec.classList.remove('popup__open');
    document.removeEventListener("keydown", (evt)=>{
        if(evt.key=='Escape')
        closePopup(popup);
    });
    if(window.innerWidth<=961){
        headerPhone.classList.remove('header__menu_phone-white');
    }
};

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


form.addEventListener('submit',(evt)=>{
    evt.preventDefault();

    closePopup(popup);
})

const bgBlur = document.querySelector('.bg-blur');

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
const kosmet = document.querySelectorAll('.header__menu_item');
const indi = document.querySelectorAll('.header__menu_down-indik');
const menu =Array.from(document.querySelectorAll('.header__menu_down'));



function addHoverMenu(selecName,selecMenu,ind){
    selecName.addEventListener('mouseover',()=>{
        selecMenu.style.display='block';
        const x = selecName.getBoundingClientRect().left
        ind.style.left= x+70+'px';
        ind.style.top=-11+'px';
    })
    selecName.addEventListener('mouseleave',()=>{
        selecMenu.style.display='none';
    })
}
for(var i=0;i<=2;i++){
    addHoverMenu(kosmet[i],menu[i],indi[i]);
}
const popupMenuPhone = document.querySelector('.popup__menu');
const menuButtonPhone = document.querySelector('.header__menu_phone-button');
const buttonOP = document.querySelector('.header__menu_phone-buttonClose');
menuButtonPhone.addEventListener('click',()=>{
    popupMenuPhone.classList.add('popup__open_phone');
    headerPhone.classList.add('header__menu_phone-white');
    buttonOP.classList.add('header__button_open');
    menuButtonPhone.classList.add('header__button_close');
})
buttonOP.addEventListener('click',()=>{
    popupMenuPhone.classList.remove('popup__open_phone');
    headerPhone.classList.remove('header__menu_phone-white');
    buttonOP.classList.remove('header__button_open');
    menuButtonPhone.classList.remove('header__button_close');
})