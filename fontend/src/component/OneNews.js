import React, { Component } from 'react';
import axios from 'axios'

import ListCom from './ListCom';
import Tag from './Tag';
import RelatedNews from './RelatedNews';

class OneNews extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            News: [],
            cate_id: '',
         }
    }
    componentDidMount() {
        axios.get(`http://localhost:4000/news/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ News: res.data })
                console.log(res.data)
            })
            .catch((error) => {
                console.log("Error" + error)

            })
    }
    render() {
        const { News } = this.state;
        return (
            <div style={{ margin: 70 }}>
                <div className="container" >
                    <div className="row" >

                        {News.map((item, key) => {
                            const { title, content, short_intro, image, date_created, author_name} = item;

                            const formatDate = date_created.substring(11, 16) + ' ' + date_created.substring(8, 10) + '/' + date_created.substring(5, 7) + '/' + date_created.substring(0, 4);
                            return (
                                <div className="col-lg-8 post" key={key} style={{margin: "0 auto", backgroundColor: "#ffffff"}}>
                                    <h1 className="mt-4 title" style={{fontFamily: 'Times New Roman'}}>{title}</h1>
                                    <p className="lead" style={{fontSize: 15}}>
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                        <a style={{fontWeight: "bold"}}> {author_name}</a>
                                        <a style={{marginLeft: 30}}><i className="fa fa-clock-o" aria-hidden="true"></i>
                                        <a> {formatDate}</a>
                                    </a>
                                    </p>
                                    <hr />
                                    <img className="img-fluid rounded" src={image} alt="" />
                                    <hr />
                                    <p className="lead" style={{ fontStyle: "italic", fontSize: 15 }}>{short_intro}</p> <hr />
                                    <p className="lead">{content}</p>

                                </div>
                            )
                        })}

                    </div>
                    <hr />
                    <Tag news_id={this.props.match.params.id}></Tag>
                    <hr />
                    <RelatedNews ></RelatedNews>
                    <ListCom news_id={this.props.match.params.id}></ListCom>
                </div>
            </div>
        );
    }
}

export default OneNews;