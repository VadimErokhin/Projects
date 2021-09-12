const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 2500,
  },


});

const gallerySwiper = new Swiper('.gallery-swiper', {
  // Optional parameters
  loop: false,
  breakpointsBase: 'container',
  navigation: {
    nextEl: '.gallery__button-right',
    prevEl: '.gallery__button-left',
  },

  pagination: {
    el: '.swiper-pagination-fraction',
    type: 'fraction',
  },





});



const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: ''
});

const items = document.querySelectorAll('.js-events-hidden');
const btn = document.querySelector('.events__btn');
btn.addEventListener('click',()=>{
  items.forEach(i=>{
    i.classList.remove("js-events-hidden")
  })
})




$(function () {
  $("#accordion").accordion();
});

const publicationSwiper = new Swiper('.swiper-publication', {
  // Optional parameters
  loop: false,
  breakpointsBase: 'container',
  navigation: {
    nextEl: '.publication__button-right',
    prevEl: '.publication__button-left',
  },

  pagination: {
    el: '.swiper-publication-fraction',
    type: 'fraction',
  },





});

const projectsnSwiper = new Swiper('.swiper-projects', {
  // Optional parameters
  loop: false,
  breakpointsBase: 'container',
  navigation: {
    nextEl: '.projects__button-right',
    prevEl: '.projects__button-left',
  },

});


// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.76, 37.64],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 12
    
  },{
    autoFitToViewport: 'always'

  });
 

  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/Placemark.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
    });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}

const flagsButton = document.querySelectorAll('.catalog__button');
flagsButton.forEach(i=>{
  console.log('i',i)
  i.addEventListener('click',(event)=>{
    console.log('event',event)
    flagsButton.forEach(b=>{
      b.classList.remove('flag-active')
    })
    event.path[1].classList.add('flag-active')
  })
 
  
})

var selector = document.getElementById("input-tel");

  var im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength:2,
      maxLength:10
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.Inputmask.unmaskedvalue()
        return Number(phone) && phone.lenght === 10
      }
    },
    mail: {
      required: true,
      email: true
    },
  },
  messages: {
    name: 'Недопустимый формат',
    tel:  'Недопустимый формат',
  },

  });

  const listButton = document.querySelectorAll('.hero__item-btn');
  const listPopup =  Array.prototype.slice.call(document.querySelectorAll('.btn-list')); 
  listButton.forEach(i=>{
    console.log('i',i)
    i.addEventListener('click',(event)=>{
      console.log('event',event)
      listButton.forEach(b=>{
        b.classList.remove('button-active')
      })
      event.path[0].classList.add('button-active')
      const listId = event.path[0].dataset.list
      const current = listPopup.find(e => {
        return e.dataset.list === listId
    
      
      })
      listPopup.forEach(b=>{
        b.classList.remove('btn-list-active')
      })
      console.log( current, listPopup )
      current.classList.add('btn-list-active')
    })
   
    
  })  


  


// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('btn-list')) {

//     var dropdowns = document.getElementsByClassName("btn-list");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('btn-list-active')) {
//         openDropdown.classList.remove('btn-list-active');
//       }
//     }
//   }
// }