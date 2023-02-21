var btnOpen = document.querySelector('.btn-open')
var modal = document.querySelector('.modal')
var iconClose = document.querySelector('.modal__header i')
var btnClose = document.querySelector('.modal__footer button')

function toggleModal(){
    modal.classList.toggle('open-close')
}

btnOpen.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
modal.addEventListener('click', function(x) {
    if(x.target === x.currentTarget) {
        toggleModal()
    }
})