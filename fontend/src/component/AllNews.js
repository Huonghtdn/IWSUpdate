import React, { Component } from 'react';
import axios from 'axios'
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';

import Header from './Header'

class AllNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            News: [],
            currentPage: 1,
            recordsPerPage: 6
        }
    }
    handleClick = (e) => {
        this.setState({
            currentPage: Number(e.target.id),
        });
    }
    componentDidMount() {
        axios.get('http://localhost:4000/news')
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
                 onClick={this.handleClick}>{number}</PageItem>
            );
        });
        const renderTable = currentRecords.map((item, key) => {
            const { image, short_intro, title, id } = item;
            return (
                <div className="col-lg-4 col-md-6 mb-4" key={key}>
                    <div className="card h-100">
                        <a href={`/category/${id}`}><img className="card-img-top" style={{ height: 250 }} src={image} alt="" /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href={`/category/${id}`} style={{fontFamily: 'Times New Roman'}}>{title}</a>
                            </h4>
                            <p className="card-text">{short_intro}</p>
                        </div>
                    </div>
                </div>

            )
        })
        return (
            <div className="row" style={{ margin: 70 }}>
                <Header></Header>
                <div className="row text-center">
                    {renderTable}

                </div>
                <hr />
                <Pagination className="pagination" size="md">
                    {renderPageNumbers}
                </Pagination>
            </div>
        );
    }
}

export default AllNews;