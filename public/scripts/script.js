const burger = document.querySelector(".burger");
const burger_menu = document.querySelector(".burger_menu");

burger.addEventListener("click", (event) => {
    burger.classList.toggle("active");
    burger_menu.classList.toggle("active");
});

//---------

const prise = document.querySelectorAll(".fifth_page .prise, .arrow");
const news = document.querySelector(".news");
const cross = document.querySelector(".cross");

cross.addEventListener("click", () => {
    news.classList.remove("active");
});

for (let i = 0; i < prise.length; i++) {
    prise[i].addEventListener("click", () => {
        news.classList.add("active");
    });
}

// ---------

const input = document.querySelector(".lupa_input");
const form = document.querySelector(".lupa_form");

const url = new URL(window.location.href).origin;

form.addEventListener("submit", () => {
    form.setAttribute("action", url + `/${input.value.toLowerCase()}`);
});

// ---------

const users = [
    {
        name: "Rasalida Williamson",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem opposed to using 'Content here, content here..",
        img: "./img/ben-parker-OhKElOkQ3RE-unsplash 1.png",
    },
    {
        name: "Salvadin Tur",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quidem cum sequi ducimus quae. Blanditiis repellat, vel officia quo recusandae animi consequatur, perspiciatis impedit asperiores reprehenderit, sint aspernatur tenetur unde.",
        img: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2867",
    },
    {
        name: "Dout Tor",
        text: "us quae. Blanditiis repellat, vel officia quo recusandae animi consequatur, perspiciatis impedit asperiores reprehenderit, sint aspernatur tenetur unde.",
        img: "https://sriit.ac.in/tool/plugins/images/users/1.jpg",
    },
];

const arrowRight = document.querySelector(".rightArrow");
const arrowLeft = document.querySelector(".leftArrow");

const blockText = document.querySelector(".third_page_textImg_text");
const userImg = document.querySelector(".third_page_foto");
const userName = document.querySelector(".third_page_name");

let i = 0;

arrowLeft?.addEventListener("click", () => {
    i -= 1;
    if (i < 0) {
        i = users.length - 1;
    }
    blockText.style.animation = "slide-left-out 0.3s ease-in";
    userImg.style.animation = "slide-left-out 0.3s ease-in";
    userName.style.animation = "slide-left-out 0.3s ease-in";

    setTimeout(() => {
        blockText.textContent = users[i].text;
        userImg.setAttribute("src", users[i].img);
        userName.textContent = users[i].name;
        blockText.style.animation = "slide-left-in 0.3s ease-in";
        userImg.style.animation = "slide-left-in 0.3s ease-in";
        userName.style.animation = "slide-left-in 0.3s ease-in";
    }, 300);
});

arrowRight?.addEventListener("click", () => {
    i += 1;
    if (i > users.length - 1) {
        i = 0;
    }
    blockText.style.animation = "slide-right-out 0.3s ease-in";
    userImg.style.animation = "slide-right-out 0.3s ease-in";
    userName.style.animation = "slide-right-out 0.3s ease-in";

    setTimeout(() => {
        blockText.textContent = users[i].text;
        userImg.setAttribute("src", users[i].img);
        userName.textContent = users[i].name;
        blockText.style.animation = "slide-right-in 0.3s ease-in";
        userImg.style.animation = "slide-right-in 0.3s ease-in";
        userName.style.animation = "slide-right-in 0.3s ease-in";
    }, 300);
});

const product_modal = document.querySelectorAll(".product_description");
const selected_product = document.querySelector(".selected_product");
const modal_window = document.querySelector(".modal_window");

for (let i = 0; i < product_modal.length; i++) {
    product_modal[i].addEventListener("click", () => {
        selected_product.innerHTML = product_modal[i].textContent;
        
        modal_window.classList.add("active")
    });
}
