import React, { Component } from 'react';
import axios from 'axios'

class Tag extends Component {
    constructor(props) {
        super(props);
        this.state={
            Tags: []}
    }
    componentDidMount(){
        axios.get(`http://localhost:4000/news/${this.props.news_id}/tags`)
        .then(res =>{
            this.setState({Tags: res.data})
        })
        .catch((error)=>{
                console.log("Error" + error)        
            
        })
    }
    render() {
        const {Tags} = this.state;
        return (
            <div style={{margin: "0 auto", width:760, fontSize: 15, fontWeight:"bold", justifyContent: "center"}}>
                {Tags.map((item, key) =>{
                    const {tag_name,id} = item;
                    return(
                        <div key={key} style={{display:"inline-block"}}>
                        <a href={`/tags/${id}/news`}>#{tag_name}</a>
                        </div>
                    )
                })}             
               
            </div>
        );
    }
}

export default Tag;