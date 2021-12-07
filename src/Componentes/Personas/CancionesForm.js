import React, { Component } from "react";
import axios from "axios";

class CancionesForm extends Component{

    constructor(props){
        super(props)
        this.state = {}
    }

    submitNuevacancion(event){
//prevenga el comportamiento por defecto del submit :D
    event.preventDefault()
        //enviar request al backend utilizando axios
        axios.post('http://localhost:5000/canciones',
    {
        nombre: this.refs.nombre.value,
        cantante: this.refs.cantante.value,
        genero: this.refs.genero.value,
       

    }
        ).then(respuesta => console.log(respuesta)  )
        .catch (error => console.log (error)  )
    }

    render(){
        return(  
            <div className="row">
                <h5 className="center">Nueva canción</h5>
                <form className="col s12" onSubmit={this.submitNuevacancion.bind(this)} >
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nombre"ref="nombre"/>
                            <label for="nombre">Nombre</label>
                        </div>                    
            <div className="input-field col s6">
                    <input id="cantante" ref="cantante"/>
                    <label for="cantante">Cantante</label>
            </div>
       </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="genero" ref="genero"/>
                            <label for="genero">Genero</label>
                        </div>                    
            
            <div className="row">
                       
                        <button name="action"
                            type="submit" className="waves-effect waves-light btn-small deep-purple accent-2">Guardar
                            
                                </button>  
                        </div>
       </div>
       
    </form>
  </div>
        )
    }
}


export default CancionesForm
