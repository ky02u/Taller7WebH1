function comprobarClave(){
    password = document.formualrio.password.value
    password2 = document.formualrio.password2.value

    if (password == password2)
       alert("Las dos claves son iguales")
    else
       alert("Las dos claves son distintas")
}