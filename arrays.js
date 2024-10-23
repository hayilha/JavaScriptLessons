const todo=[];
 function addTodo(){
   const inputE= document.querySelector('.name')
   const namee=inputE.value
   todo.push(namee);
   console.log(todo)
   inputE.value=""
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
 let todolist=''
    for(let i=0;i<todo.length;i++){
      const currentTodo=todo[i]
      const html=`<p>${currentTodo}</p>`
      todolist+=html
      console.log(todolist)
    document.querySelector('.button').innerHTML=todolist
  
    }
  
  }
  function removeTodo(index) {
    todo.splice(index, 1);
    fixing(); 
}