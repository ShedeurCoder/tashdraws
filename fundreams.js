const pictures2 = [
    'Cover_Girl', 'Cover_Boy', '1_Boy', '2_Girl', '3_Boy', '4_Girl', '6_Boy', '7_Girl'
]
const fileType2 = 'jpg'
const classesForHome2 = [
    'col-lg-3', 'col-md-4', 'col-sm-6', 'mb-2'
]
addImagesDreamsPage()
function addImagesDreamsPage() {
    pictures2.forEach((c, i) => {
        const containerDiv2 = document.createElement('div')
        containerDiv2.classList.add(...classesForHome2)
        containerDiv2.setAttribute('onclick', `showModal2('${i + 1}')`)
        containerDiv2.setAttribute('data-toggle', 'modal')
        containerDiv2.setAttribute('data-target', '#modal2')

        const img = document.createElement('img')
        img.setAttribute('src', `images/fundreams/${c}.${fileType2}`)
        img.setAttribute('alt', c)

        containerDiv2.appendChild(img)
        document.getElementById('funDreamsRow').appendChild(containerDiv2)
    })
}
createSlideshow2()
function createSlideshow2() {
    pictures2.forEach(c => {
        const containerDiv2 = document.createElement('div')
        containerDiv2.classList.add('slides2')

        const img = document.createElement('img')
        img.setAttribute('src', `images/fundreams/${c}.${fileType2}`)
        img.setAttribute('alt', c)

        containerDiv2.appendChild(img)
        document.getElementById('slideshowContainer2').appendChild(containerDiv2)
    })
}

let slideIndex2 = 1;
showSlides2(slideIndex2);
function plusSlides2(n) {
    showSlides2(slideIndex2 += parseInt(n));
    console.log(slideIndex2)
}
function showModal2(n) {
    showSlides2(slideIndex2 = parseInt(n));
    console.log(slideIndex2)
}
function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("slides2");
    if (n > slides.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex2-1].style.display = "block";
    console.log(slideIndex2)
} 

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    plusSlides2(1); // replace with the name of the function you want to call
  }
});
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    plusSlides2(-1); // replace with the name of the function you want to call
  }
});