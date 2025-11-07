import React, {Component} from 'react';

class CompListaCategorias extends Component {

  render(){
        return  <div className="col-3">
                <p className="h5 text-secondary">Categorías</p>
                <div className="card">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><a href="#" className="text-secondary">Destacados</a></li>
                        <li className="list-group-item"><a href="#" className="text-secondary">Ropa</a></li>
                        <li className="list-group-item"><a href="#" className="text-secondary">Zapatillas</a></li>
                        <li className="list-group-item"><a href="#" className="text-secondary">Accesorios</a></li>
                    </ul>
                </div>
            </div>
  }
}

export default CompListaCategorias;

