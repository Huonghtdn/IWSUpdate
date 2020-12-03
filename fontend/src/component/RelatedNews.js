import React, { Component } from 'react';
import axios from 'axios'

class RelatedNews extends Component {
  constructor(props) {
    super(props);
    this.state = { News: [] }
  }
  componentDidMount() {
    axios.get(`http://localhost:4000/news`)
      .then(res => {
        this.setState({ News: res.data.data })
      })
      .catch((error) => {
        console.log("Error" + error)

      })
  }
  render() {
    const { News } = this.state;
    const limit = News.slice(0, 4);
    const render = limit.map((item) => {
      const { title, image, id } = item;
      return (
        <div className="col-lg-3 col-md-6 mb-4" key={title}>
          <div className="card h-100">
            <a href={`/category/${id}`}><img className="card-img-top" style={{ height: 170 }} src={image} alt="" /></a>
            <div className="card-body" style={{ padding: 10 }}>
              <h4 className="card-title" style={{ fontSize: 15, marginBottom: 0, fontFamily: 'Times New Roman' }} >
                <a href={`/category/${id}`}> {title}</a></h4>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="container" style={{ marginTop: 70 }}>
        <h5>Related News</h5>
        <div className="row text-center">{render}</div>
      </div>
    )
  }

}

export default RelatedNews;
