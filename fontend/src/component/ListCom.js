import React, { Component } from 'react';
import axios from 'axios'
import CreCom from './CreCom';

class ListCom extends Component {
    constructor(props) {
        super(props);
        this.state={Com: [],
        updated: false,
        deleted: false,
    }
    }
    componentDidMount(){
        axios.get(`http://localhost:4000/news/${this.props.news_id}/comments`)
        .then(res =>{
            this.setState({Com: res.data.data})
        })
        .catch((error)=>{
                console.log("Error" + error)        
            
        })
    }
    
    render() {
        const {Com}  = this.state
        return (
            <div style={{width: 760}} >
                <CreCom news_id={this.props.news_id}></CreCom>
                {Com.map((item, key)=>{
                    const {username, comment, date_created} = item;
                    const formatDate = date_created.substring(11, 16)+' '+date_created.substring(8, 10)+'/'+date_created.substring(5, 7)+'/'+date_created.substring(0, 4);
               
                    return(
                        <div className="media mb-4" key={key} style={{backgroundColor: 'white'}}>
                        <img className="d-flex mr-3 rounded-circle"
                            style={{width:50, height:50}} 
                            src="https://cdn2.vectorstock.com/i/1000x1000/36/96/comment-icon-vector-22003696.jpg" alt="" />
                        <div className="media-body">
                          <p className="lead" style={{fontSize: 10, color: '#58ACFA'}}>{formatDate}</p>
                          <h5 className="mt-0">{username}</h5>
                          {comment}
                        <p></p>
                        </div>
                      </div>
                    )
                })}
                {/* Single Comment */}
           
            </div>
        );
    }
}

export default ListCom;