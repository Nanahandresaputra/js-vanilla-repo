
let plceholders = document.querySelector('#tabelDat')
plceholders.innerHTML = load()
fetch ('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json()
    )
.then (response => {
    let tabel = '';
    for (let data of response){
        tabel+= `<tr>
                    <td>${data.id}</td>
                    <td>${data.name}</td>
                    <td>${data.username}</td>
                    <td>${data.email}</td>
                    <td>${data.address.street}
                        ${data.address.suite}
                        ${data.address.city}</td>
                    <td>${data.company.name}</td>
                 </tr>`
    }
    plceholders.innerHTML=tabel
})
function load() {
    return ` <tr>
    <td class="load" colspan="6">Loading...</td>
  </tr>`
}
