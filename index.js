let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    let listItem = `<li>
        <a href="${inputEl.value}" target="_blank">
             ${inputEl.value}
        </a>
        </li>`
    ulEl.innerHTML += listItem
    inputEl.value = ''
})


