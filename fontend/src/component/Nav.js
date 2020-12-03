import React, { Component } from 'react';
import axios from 'axios'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state={
            Category: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:4000/category')
        .then(res =>{
            this.setState({Category: res.data.data})
        })
        .catch((error)=>{
                console.log("Error" + error)        
            
        })
    }
    
    render() {
        const {Category} = this.state;
        return (
            <div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">News Times</a>
          <button className="navbar-toggler" type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarResponsive" 
                    aria-controls="navbarResponsive" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto active" >

                {Category.map((item, key)=>{
                    const {id, category_name} = item;
                    return(
                        <li className="nav-item"  key={id} style={{width:115, textAlign:"center"}}>
                        <a className="nav-link" href={`/category/${id}`}>{category_name}</a>
                        </li>
                    )
                })}
            </ul>
          </div>
        </div>
      </nav>
            </div>
        );
    }
}

export default Nav;