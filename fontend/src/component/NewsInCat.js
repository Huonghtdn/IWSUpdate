import React, { Component } from 'react';
import axios from 'axios'
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';

class NewsInCat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      News: [],
      currentPage: 1,
      recordsPerPage: 6, 
    }
  }
  handleClick = (e) => {
    this.setState({
      currentPage: Number(e.target.id),
    });
  }
  componentDidMount() {
    axios.get(`http://localhost:4000/category/${this.props.match.params.id}/news`)
      .then(res => {
        this.setState({ News: res.data.data })
      })
      .catch((error) => {
        console.log("Error" + error)

      })
  }
  render() {
    const { News } = this.state;
    const { currentPage, recordsPerPage } = this.state;
    const indexOfLast = currentPage * recordsPerPage;
    const indexOfFirst = indexOfLast - recordsPerPage;
    const currentRecords = News.slice(indexOfFirst, indexOfLast);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(News.length / recordsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <PageItem key={number} id={number} 
            active={this.state.currentPage === number} 
            onClick={this.handleClick} 
            cat_id={this.props.match.params.id}
            style={{margin: '0 0 0 auto'}}>{number}</PageItem>
      );
    });
    const renderTable = currentRecords.map((item, key) => {
      const { image, short_intro, title, id } = item;
      return (
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100" >
            <img className="card-img-top" style={{ height: 170 }} src={image} alt="" />
            <div className="card-body">
              <a href={`/news/${id}`} > <h4 className="card-title" href={`/news/${id}`} style={{fontFamily: 'Times New Roman'}}>{title}</h4></a>
              <p className="card-text">{short_intro}</p>
            </div>
          </div>
        </div>
      );
    })
      return (
        <div className="container" style={{ marginTop: 70 }}>
          <header className="jumbotron my-4" style={{ margin: "auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <h1 className="display-3">A Warm Welcome!</h1>
            <p className="lead">An Independent Democratic Newspaper Of The First Class Unchallenged In Its Field</p>
          </header>
          <hr />
          <div className="row text-center">
          {renderTable}
                
          </div>
          <hr/>
                <Pagination className="pagination" size="md" >
                    {renderPageNumbers }
                </Pagination>
        </div>
      );
    }
}

  export default NewsInCat;