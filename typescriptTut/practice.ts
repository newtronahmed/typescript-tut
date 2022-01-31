
let tabs = document.querySelectorAll<HTMLDivElement>('.tab')
let tabContents = document.querySelectorAll<HTMLDivElement>('.panel')
// let ids = document.querySelector('#one')

const tabify = (e) => {
    console.log('hello')
    let target = e.target as HTMLDivElement;
    tabContents.forEach((each, i) => {
        each.classList.remove('active')
    })
    tabs.forEach(each => each.classList.remove("active"))

    target.classList.add("active")
    let panel = target.getAttribute('data-target');
    console.log(document.getElementById(`${panel}`))
    document.getElementById(`${panel}`)?.classList.add('active')

}
tabs.forEach(each => {
    // console.log('tab')
    each.addEventListener('click', (e) => tabify(e))
})



