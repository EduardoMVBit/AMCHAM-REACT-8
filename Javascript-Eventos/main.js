// DOM
// Document Object Model

// Objectos literales. Propiedas y Metodos
/*

window.console.log()
window.document.body
document.body.children.item(0) // <h2>Hola</h2>
document.querySelector("#welcome") // <h2>Hola</h2>
document.getElementById("welcome").classList // [value: '']
document.getElementById("welcome").classList.add("principal")
document.getElementById("welcome").classList.remove("principal")
document.getElementById("welcome").classList.toggle("principal")

*/
// Eventos de Teclado
/*
window.addEventListener("keydown",(e) => {
  const key = e.key
  switch (key) {
    case "a":
      document.body.style.backgroundColor = "yellow"  
    break;
    case "w":
      document.body.style.backgroundColor = "tomato"  
    break;
    case "s":
      document.body.style.backgroundColor = "lime"  
    break;
    case "d":
      document.body.style.backgroundColor = "teal"  
    break;
  
    default:
      document.body.style.backgroundColor = "snow"
      break;
  }
})
*/

// Eventos de Mouse
//document.querySelector("#bars").onClick = function(){}
/*
  document.querySelector("#bars").addEventListener('click',function(evento){
    evento.preventDefault()
    document.querySelector("#main-nav").classList.toggle("hide")
  })
  */

// Eventos de Formularios

let tareasGuardadas = window.localStorage.getItem('tareas')

if(tareasGuardadas){
  document.getElementById("list").innerHTML = tareasGuardadas
  document.querySelectorAll("#list li form").forEach(form => {
    form.addEventListener('submit',(e) => {
      e.preventDefault()
      const task = e.target.parentElement
      task.classList.toggle('completed') 
    })
  })
}else{
  window.localStorage.setItem('tareas',"")
}


document.forms.agregar.addEventListener('submit',(e) => {
  e.preventDefault()
  const {area,task} = e.target.elements
  const newTask = `<li class="task">
  <h2>${area.value}</h2>
  <p>${task.value}</p>
  <form action="#">
    <button type="submit" class="fa-solid fa-check"></button>
  </form>
</li>`
  document.querySelector("#list").innerHTML += newTask
  window.localStorage.setItem('tareas',document.querySelector("#list").innerHTML )
  document.querySelectorAll("#list li form").forEach(form => {
    form.addEventListener('submit',(e) => {
      e.preventDefault()
      const task = e.target.parentElement
      task.classList.toggle('completed') 
      window.localStorage.setItem('tareas',document.querySelector("#list").innerHTML )
    })
  })
})

