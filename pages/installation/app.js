const title = document.querySelector('.heading-title');
const btns = document.querySelectorAll('.events-btn');
const containers = document.querySelectorAll('.avant-event-container-section .container');
const headingBtn = document.querySelector(".heading-btn");
const nav = document.querySelector('.avant-events-section');


document.addEventListener('scroll', () => {
    let value = window.scrollY;
    title.style.transform = `translateY(${value * 10})`;
})
let open = false
headingBtn.addEventListener('click', () => {
    open = !open;
    headingBtn.classList.toggle('active');
    nav.classList.toggle('active');
    if (open) {
        headingBtn.classList.remove('fa-bars');
        headingBtn.classList.add('fa-xmark');
    } else {
        headingBtn.classList.remove('fa-xmark');
        headingBtn.classList.add('fa-bars');
    }
})
btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        btns.forEach((item) => {
            item.classList.remove('active');
        })
        containers.forEach((item) => {
            item.classList.remove('active');
        })
        btn.classList.add('active');
        containers[i].classList.add('active');
        if (open) {
            open = false
            headingBtn.classList.toggle('active');
            nav.classList.toggle('active');
            headingBtn.classList.remove('fa-xmark');
            headingBtn.classList.add('fa-bars');
        }
    })
})
