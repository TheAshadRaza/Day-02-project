const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function (e) {
    span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout', function (e) {
    span.classList.remove('animated', 'rubberBand')
}));

const htmlbar = document.querySelector('.bar-html');
const cssbar = document.querySelector('.bar-css');
const jsbar = document.querySelector('.bar-javascript')
const reactbar = document.querySelector('.bar-react')


var t1 = new TimelineLite()

t1.fromTo(htmlbar, .75, { width: `calc(0%-6px)` }, { width: `calc(90%-6px)`, ease: power4.easeOut })
t1.fromTo(cssbar, .75, { width: `calc(0%-6px)` }, { width: `calc(95%-6px)`, ease: power4.easeOut })
t1.fromTo(jsbar, .75, { width: `calc(0%-6px)` }, { width: `calc(75%-6px)`, ease: power4.easeOut })
t1.fromTo(reactbar, .75, { width: `calc(0%-6px)` }, { width: `calc(70%-6px)`, ease: power4.easeOut })

const contoller = new ScrollMagic.contoller();
const scene = new ScrollMagic.scene({
    triggerElement: '.skill',
    triggerHook: 0
})
    .setTween(t1)
    .addTo(contoller)

const showRequiredCategory = event => {
    const getId = get.id
    const links = document.querySelectorAll('.work-category button')
    for (i = 0; i <links.length; i++) {
        if (links[i].hasAttribute('class')) {
            links[i].classList.remove('active')
        }
    }
event.classList.add('active')
const getCategory = document.querySelector(`.category-${getId}`)
const categories = document.querySelectorAll(`div[class^="category-"]`)
for (i = 0; i < links.length; i++) {
    if (categories[i].hasAttribute('class')) {
        links[i].classList.remove('showCategory')
        links[i].classList.add('hideCategory')
    }
}
getCategory.classList.remove('hideCategory')
getCategory.classList.add('showCategory')
};










