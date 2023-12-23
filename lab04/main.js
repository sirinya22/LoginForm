const loginForm =  document.querySelector('.login-form')
const inp_username = document.querySelector('#username')
const inp_password = document.querySelector('#password')

const hdlLogin = e => {
    e.preventDefault()
    console.log(loginForm.elements)
    let allInput = loginForm.elements
    console.log(allInput[0].value)   
}

loginForm.addEventListener('submit', hdlLogin)