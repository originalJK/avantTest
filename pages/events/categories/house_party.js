const list = document.querySelector(".event-list");
const path = "../../../data/images/events/house party/Picture"
const header = document.querySelector('.heading');
header.style.backgroundImage =`linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)) ,url('${path}8.png')`;

for(let i = 8; i <= 19 ; i ++) {
    let div = document.createElement('div');
    div.classList.add("col-6");
    div.classList.add("mb-3");
    let img = document.createElement("img");
    img.classList.add("img-fluid");
    img.src = path + `${i}.png`
    div.append(img);
    list.append(div);
}