import React, { Component } from 'react'
import axios from 'axios';

export default class FournisseurAjt extends Component {
    constructor(props){
        super(props);
        
        this.state={name:'',mail:'',telephone:''}
        this.FournChange=this.FournChange.bind(this);
        this.submitFourn=this.submitFourn.bind(this); 
        
      }
      
      submitFourn(event){
       
        event.preventDefault();
        const Fournniseur={
            name:this.state.name,
            mail:this.state.mail,
            telephone:this.state.telephone
          
        }
        axios.post("http://localhost:5000/api/fournisseurs",Fournniseur)
        .then(response =>{
          if(response.data !=null){
            alert("fournisser  ajouter ")
        
          }
        })
        
      }
      FournChange(event){
        this.setState({
          [event.target.name]:event.target.value
        });
      }
     
      render() {
        return (
          <div>
            
          
          
                   <form onSubmit={this.submitFourn}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label >Name</label>
          <input type="text" className="form-control" name='name' placeholder="Name"
                 value={this.state.name} onChange={this.FournChange}/>
        </div>
        <div className="form-group col-md-6">
          <label >Telephone</label>
          <input type="number" className="form-control" name='telephone' placeholder="Telephone"
                 value={this.state.telephone} onChange={this.FournChange}/>
        </div>
      </div>
      <div className="form-group">
        <label >Adresse</label>
        <input type="text" className="form-control" name='mail' placeholder="Mail"
        value={this.state.mail} onChange={this.FournChange}/>
      </div>
      
     
      <button type="submit" className="btn btn-primary">Ajouter</button>
    </form>
                
            </div>
        )
      }
    }
