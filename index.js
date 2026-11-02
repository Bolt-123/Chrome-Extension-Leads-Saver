let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    for (let i = 0; i < myLeads.length; i++){
        ulEl.innerHTML += `<li><a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>`
    }
}
inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    let listItem = `<li>
        <a href="${inputEl.value}" target="_blank">${inputEl.value}</a></li>`
    ulEl.innerHTML += listItem
    inputEl.value = ''
localStorage.setItem('myLeads', JSON.stringify(myLeads))
})
deleteBtn.addEventListener('dblclick', function() {
    localStorage.clear()
    myLeads = []
    ulEl.innerHTML = ''
})