const pictures = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"
]
const fileType = 'jpg'
const classesForHome = [
    'col-lg-3', 'col-md-4', 'col-sm-6', 'mb-2'
]
addImagesHomePage()
function addImagesHomePage() {
    pictures.forEach((c, i) => {
        const containerDiv = document.createElement('div')
        containerDiv.classList.add(...classesForHome)
        containerDiv.setAttribute('onclick', `showModal('${i + 1}')`)
        containerDiv.setAttribute('data-toggle', 'modal')
        containerDiv.setAttribute('data-target', '#modal')

        const img = document.createElement('img')
        img.setAttribute('src', `images/${c}.${fileType}`)
        img.setAttribute('alt', c)

        containerDiv.appendChild(img)
        document.getElementById('homeRow').appendChild(containerDiv)
    })
}
createSlideshow()
function createSlideshow() {
    pictures.forEach(c => {
        const containerDiv = document.createElement('div')
        containerDiv.classList.add('slides')

        const img = document.createElement('img')
        img.setAttribute('src', `images/${c}.${fileType}`)
        img.setAttribute('alt', c)

        containerDiv.appendChild(img)
        document.getElementById('slideshowContainer').appendChild(containerDiv)
    })
}

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += parseInt(n));
    console.log(slideIndex)
}
function showModal(n) {
    showSlides(slideIndex = parseInt(n));
    console.log(slideIndex)
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    console.log(slideIndex)
} 