import axios from 'axios';
import React, { Component } from 'react'


export default class MedicamentAjt extends Component {
    constructor(props){
        super(props);
        
        this.state={name:'',reference:'',libelle:'',prix:''}
        this.MediChange=this.MediChange.bind(this);
        this.submitMedi=this.submitMedi.bind(this); 
        
      }
      
      submitMedi(event){
       
        event.preventDefault();
        const Medicament={
            name:this.state.name,
            reference:this.state.reference,
            libelle:this.state.libelle,
            prix:this.state.prix,
            fournisseur:{id:1}
          
        }
        axios.post("http://localhost:5000/api/medicaments",Medicament)
        .then(response =>{
          if(response.data !=null){
            alert("fournisser  ajouter ")
        
          }
        })
        
      }
      MediChange(event){
        this.setState({
          [event.target.name]:event.target.value
        });
      }
     
      render() {
        return (
          <div>
            <h3>Ajout Medicament</h3>
          
          
                   <form onSubmit={this.submitMedi}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label >Name</label>
          <input type="text" className="form-control" name='name' placeholder="Name"
                 value={this.state.name} onChange={this.MediChange}/>
        </div>
        <div className="form-group col-md-6">
          <label >libelle</label>
          <input type="text" className="form-control" name='libelle' placeholder="libelle"
                 value={this.state.libelle} onChange={this.MediChange}/>
        </div>
      </div>
      <div className="form-group">
        <label >reference</label>
        <input type="text" className="form-control" name='reference' placeholder="reference"
        value={this.state.reference} onChange={this.MediChange}/>
      </div>
      <div className="form-group">
        <label >reference</label>
        <input type="number" className="form-control" name='prix' placeholder="prix"
        value={this.state.prix} onChange={this.MediChange}/>
      </div>
      
     
      <button type="submit" className="btn btn-primary">Ajouter</button>
    </form>
                
            </div>
        )
      }
}
