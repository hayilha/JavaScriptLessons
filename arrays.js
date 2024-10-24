const todo=[{}]
 function addTodo(){
  const inputE= document.querySelector('.name')
  const namee=inputE.value
  const dateE= document.querySelector('.datei')
  const namp=dateE.value
   todo.push({name:namee,date:namp});
   console.log(todo)
   inputE.value=""
   dateE.value =""
fixing()

 } 
 const nums=[1,3,5,6,7,8]
 let total=0

 for(let i=0;i<nums.length;i++){
 const det=nums[i]
 total+=det
 }
 console.log(total)
function fixing(){
 let todolist=""
 
    for(let i=0;i<todo.length;i++){
      const currentTodo=todo[i]
      const namie=currentTodo.name
      const datee=currentTodo.date
      let html = `<p>${namie} ${datee} <button onclick="todo.splice(${i}, 1); fixing();">delete</button></p>`;
      todolist+=html
      
    }
    console.log(todolist)
    document.querySelector('.button').innerHTML=todolist
    
  }
 