const btns = document.querySelectorAll('.events-btn');
const containers = document.querySelectorAll('.avant-event-container-section .container');
// const list = document.querySelector('.event-list');
// let path = "../../data/images/events/";

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
    })
})


// images in events

// for house party
// for(let i = 8 ; i <= 19 ; i++) {
//     let div = document.createElement('div');
//     div.classList.add("col-6");
//     div.classList.add("mb-3");
//     let img = document.createElement("img");
//     img.classList.add('img-fluid');
//     img.src= path + `house party/Picture${i}.PNG`;
//     div.append(img);
//     list.append(div);
// }

