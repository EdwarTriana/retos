class Usuario {

    constructor(username,
                pass, 
                email, 
                nombres, 
                apellidos, 
                ciudad, 
                localizacion
                ) {
                    this.username
                    this.pass 
                    this.email
                    this. nombres 
                    this. apellidos 
                    this.ciudad 
                    this.localizacion 
    }
    //metodos
    registrar(){
        return `El usuario ${this.username} esta resgistrado verifique en ${this.email} para validar su cuenta`
    }

    enviarMensaje(mensaje){
        if(mensaje && mensaje !== ""){
            return'mensaje Enviado'
        }else{
            return 'no hay mensaje para enviar'
        }
    }
    loguearse(){
        return'sesion iniciada'
    }
    updPass(){
        return`revise en ${this.email} para cambiar la contraseña`
    }
}

class Cliente extends Usuario{

    constructor(
        username,
        pass, 
        email, 
        nombres, 
        apellidos, 
        ciudad, 
        localizacion,
        metodoPago,
        tarCredito,
        cdireccion
        ){

            super()
        }
}