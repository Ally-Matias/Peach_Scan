let botaoSelectLogin = document.querySelector('.buttons-select .select-login');
let botaoSelectRegister = document.querySelector('.buttons-select .select-register');
let formLogin = document.querySelector('.box-login-register .form-login');
let formRegister = document.querySelector('.box-login-register .form-register');
let boxLoginRegister = document.querySelector('.box-login-register');

botaoSelectLogin.onclick = function(){
    if(!this.classList.contains("selected")){
        botaoSelectRegister.classList.remove("selected")
        this.classList.add("selected")
        formRegister.classList.add("form-hide")
        formLogin.classList.remove("form-hide")
    }
    boxLoginRegister.classList.add('girar')
    setTimeout(function(){
        boxLoginRegister.classList.remove('girar')        
    },1000)
}

botaoSelectRegister.onclick = function(){
    if(!this.classList.contains("selected")){
        botaoSelectLogin.classList.remove("selected")
        this.classList.add("selected")
        formLogin.classList.add("form-hide")
        formRegister.classList.remove("form-hide")
    }
    boxLoginRegister.classList.add('girar')
    setTimeout(function(){
        boxLoginRegister.classList.remove('girar')        
    },1000)
}
