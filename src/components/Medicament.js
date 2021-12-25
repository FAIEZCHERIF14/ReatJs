import axios from 'axios'
import React, { Component } from 'react'


export default class Medicament extends Component {
    constructor(){
        super()
        this.state={
            listMedicament:[]
        }
    }
    deleteMedicament=(medinId)=>{
        axios.delete("http://localhost:5000/api/medicaments/"+medinId)
        .then(response =>{
          if(response.data !=null){
            
            this.setState({
                listMedicament:this.state.listMedicament.filter(medin=> medin.id !==medinId)
            })
          }
        })
        
      }
    componentDidMount(){
        
        axios.get("http://localhost:5000/api/medicaments")
        .then(response=>response.data)
        .then((data)=>{
          this.setState({listMedicament:data})
        })
    }
    render() {
        return (
            <div>
                <table className="table">
  <thead>
    <tr>
    
      <th scope='col'>medinisseur</th> 
      <th scope="col">Client</th>
      <th scope="col">Telephone</th>
      <th scope="col">Ville</th>
      <th scope="col">Adresse</th>
      <th scope="col">Prix</th>
    
    </tr>
  </thead>
  <tbody>
    {
      
      this.state.listMedicament.map((medi)=> (
        <tr key={medi.id}>
          
          <td>{medi.name}</td>
          <td>{medi.reference}</td>
          <td>{medi.libelle}</td>
          <td>{medi.date}</td>
          <td>{medi.fournisseur.name}</td>
          <td><button className='btn btn-danger' onClick={this.deleteMedicament.bind(this,medi.id)}>delete</button> </td>
          
        </tr>
      ))
    }
   
    
    
  </tbody>
</table>
               
            </div>
        )
    }
}
