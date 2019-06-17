/* массив с картинками */
let myarray = ['range.jpg', 
               'chev.jpg', 
               'bmw.jpg',
               'merc.jpg'];

/* функция, меняющая картинки вправо */
let i = 1;
function switch_right(){
    let photo = document.getElementById('main');
    photo.src = myarray[i];
    i++;
    if (i === myarray.length) {
        i = 0;
    }

}

/*функция, меняющая картинки влево */
function switch_left(){
    let photo = document.getElementById('main');
    photo.src = myarray[i];
    i--;
    if (i === -1) {
        i = myarray.length - 1;
    }
}

/* добавление функции на клик */
let right = document.getElementById('right');
right.addEventListener("click", switch_right, false);

/* добавление функции на клик */
let left = document.getElementById('left');
left.addEventListener("click", switch_left, false);

/*--------------------*/

let array = document.querySelectorAll(".hide");

for (var u = 0; u < array.length; u++) {
    array[u].style.display = 'none'
};

let event1 = document.querySelectorAll("h3");
for (var u = 0; u < event1.length; u++) {
    event1[u].addEventListener("click", function (e){
        let li = e.target.parentElement;
        div = li.querySelector('div')
    


let array = document.querySelectorAll(".hide");

for (var u = 0; u < array.length; u++) {
    array[u].style.display = 'none';
};

    div.style.display = 'block';
})
};