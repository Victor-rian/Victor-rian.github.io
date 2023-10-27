function menuShow(){
    let  menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
    } else{
        menuMobile.classList.add('open')
    }
}

// Change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle ('window-scroll', window.scrollY > 100 )
})

// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click',() => {
         faq.classList.toggle('open');


         // change icon
         const icon = faq.querySelector('.faq__icon img');
         if(icon.className === 'fa-solid fa-plus') {
            icon.className = "fa-solid fa-minus"
         } else {
            icon.className === 'fa-solid fa-plus';
         }
    })
})

