const form=document.getElementById('form')
const inputEmail=document.getElementById('email')
const inputPass=document.getElementById('password')
const boton=document.getElementById('boton')

form.onsubmit=(e)=>{
    e.preventDefault()
    fetch('http://localhost:8080/users/login',{
        method:'POST',
        body:JSON.stringify({
            email:inputEmail.value,
            password:inputPass.value
        }),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((response)=>response.json())
    .then((response)=>{
        console.log(response)
        localStorage.setItem('token',response.token)
    })
}

boton.onclick=()=>{
    fetch('http://localhost:8080/users/profile',{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${localStorage.getItem('token')}`
        }
    })
}