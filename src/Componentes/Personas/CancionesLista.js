import React from 'react'

const CancionesLista = ( props ) => {
    return ( 
        <ul className="collection with-header deep-purple accent-2">
            <li className="collection-header"><h4> Canciones: </h4></li>
            {
               props.listacanciones.map( ( item )=> {  
                    return(
                        <a
                            href="#!"
                            className="collection-item" 
                            key = { item._id }
                            onClick = { props.actualizarcancionesActual.bind(this, item) }
                            
                        >
                            { item.nombre }    { item.cantante }
                        </a>
                    )
                } ) 
            }       
       </ul>
      
    )

}

export default CancionesLista
