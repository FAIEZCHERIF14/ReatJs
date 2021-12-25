import React from 'react'
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Gestion Para</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    
      <Nav.Link as={Link} to="/MedicamentAjt" >Ajout Medicament</Nav.Link>
      <Nav.Link as={Link} to="/FournisseursAjt" >Fournisseur</Nav.Link>
      <Nav.Link as={Link} to="/Fournisseurs" >Ajout Medicament</Nav.Link>
      <Nav.Link as={Link} to="/Medicaments" >Medicaments</Nav.Link>
    </ul>
    
  </div>
</nav>
        </div>
    )
}
