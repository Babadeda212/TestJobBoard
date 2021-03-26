const buttonOpen = document.querySelector(".main__title_button");
const buttonClose = document.querySelector('.popup__buttonClose');
const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__form');
const popupButton = document.querySelector('.popup__button');
const test =Array.from(form.querySelectorAll('.test'));

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
    if(bgBlur.style.opacity>0.99)
    bgBlur.style.opacity=0.999;
})
console.log(123);