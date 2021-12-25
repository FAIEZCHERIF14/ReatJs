import React, { Component } from 'react'
import axios from 'axios'

export default class Fournisseur extends Component {
    constructor(){
        super()
        this.state={
            listFourn:[]
        }
    }
    deleteFournisseur=(fournId)=>{
        axios.delete("http://localhost:5000/api/fournisseurs/"+fournId)
        .then(response =>{
          if(response.data !=null){
            
            this.setState({
                listFourn:this.state.colis.filter(fourn=> fourn.id !==fournId)
            })
          }
        })
        
      }
    componentDidMount(){
        
        axios.get("http://localhost:5000/api/fournisseurs")
        .then(response=>response.data)
        .then((data)=>{
          this.setState({listFourn:data})
        })
    }
    render() {
        return (
            <div>
                <table className="table">
  <thead>
    <tr>
    
      <th scope='col'>Fournisseur</th> 
      <th scope="col">Client</th>
      <th scope="col">Telephone</th>
      <th scope="col">Ville</th>
      <th scope="col">Adresse</th>
      <th scope="col">Prix</th>
      <th scope="col">Etat</th>
    </tr>
  </thead>
  <tbody>
    {
      
      this.state.listFourn.map((four)=> (
        <tr key={four.id}>
          
          <td>{four.name}</td>
          <td>{four.mail}</td>
          <td>{four.telephone}</td>
          <td><button className='btn btn-danger' onClick={this.deleteFournisseur.bind(this,four.id)}>delete</button> </td>
          
        </tr>
      ))
    }
   
    
    
  </tbody>
</table>
               
            </div>
        )
    }
}
