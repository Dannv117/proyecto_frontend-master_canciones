import React, {Component} from 'react'
import axios from 'axios'
import CancionesLista from './Personas/CancionesLista.js';
import CancionesDetalle from './Personas/CancionesDetalle.js';
import CancionesForm from './Personas/CancionesForm.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      canciones: [],
      cancionesActual : {}
      
    }

    //vincular la funcion de actualizar al componente
    this.actualizarcancionesActual = this.actualizarcancionesActual.bind(this)
  }

  //llamar a la api rest
  componentDidMount(){
      const url = "http://localhost:5000/canciones"
      axios.get(url)
          .then((respuesta) => {   
              this.setState({
                 canciones: respuesta.data
              })
              console.log(respuesta.data)
          })
          .catch((error) => { console.log(error) })
  }



  //Establecer la persona a ver detalle
  actualizarcancionesActual(canciones){
    //actualizar state:
    this.setState({
      cancionesActual: canciones
    })
  }

  render(){
    return (
      <div className="container-fluid">
          <div className="row" > 
              <div className="col s12">
                <nav>
                  <div class="nav-wrapper deep-purple accent-2">
                    <a href="#!" class="brand-logo">Música</a>
               
                  </div>
                </nav>
              </div>
          </div>
          <div className="row" >
              <div className="col s3">
                  <CancionesLista
                          listacanciones={ this.state.canciones } 
                          actualizarcancionesActual = { this.actualizarcancionesActual }  
                 />
              </div>
              <div className="col s9">
                  <CancionesDetalle  canciones={ this.state.cancionesActual  }  />
              </div>
          </div>
          <div className="row">
              <div className="col s12">
                  <CancionesForm />
              </div>
          </div>
      </div>
    );
  }
}

export default App;
