let navOpenButtons = document.querySelectorAll('#nav-open-button')
let mobileNavbars = document.querySelectorAll('#mobile-navbar')
let navCloseButtons = document.querySelectorAll('#nav-close-button')

navOpenButtons.forEach(function (open) {
    open.addEventListener("click", function () {
        mobileNavbars.forEach(function (navbar) {
            navbar.classList.remove('-top-full')
            navbar.classList.add('top-0')
        })
    })
})

navCloseButtons.forEach(function (close) {
    close.addEventListener("click", function () {
        mobileNavbars.forEach(function (navbar) {
            navbar.classList.add('-top-full')
            navbar.classList.remove('top-0')
        })
    })
})