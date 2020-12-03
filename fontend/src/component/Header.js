import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="col-lg-9" style={{margin: "auto",width: 1209, display: "flex",alignItems: "center",  justifyContent: "center"}}>
                <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            <li data-target="#carouselExampleIndicators" data-slide-to={3} />
            <li data-target="#carouselExampleIndicators" data-slide-to={4} />
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active" style={{height: 350, width:900}}>
              <img className="d-block img-fluid" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Falejandrocremades%2Ffiles%2F2018%2F07%2Fdesk-3139127_1920-1200x773.jpg" alt="Bussiness" />
            </div>
            <div className="carousel-item" style={{height: 350, width:900}} >
              <img className="d-block img-fluid" src="https://cdn.vietnambiz.vn/171464876016439296/2020/6/4/eventtechnology-15912456396331111417122.jpg" alt="Technology" />
            </div>
            <div className="carousel-item" style={{height: 350, width:900}}>
              <img className="d-block img-fluid" src="https://www.livecasinohotel.com/sites/default/files/Entertainment%20-%20Crowd%201920x1327_0.jpg" alt="Entertaiment" />
            </div>
            <div className="carousel-item" style={{height: 350, width:900}}>
              <img className="d-block img-fluid" src="https://cdn.litextension.com/wp-content/uploads/2019/06/spotlight4.png" alt="Ideas" />
            </div>
            <div className="carousel-item" style={{height: 350, width:900}}>
              <img className="d-block img-fluid" src="https://www.economist.com/sites/default/files/images/2017/10/articles/main/20171021_stp505.jpg" alt="Science" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
        );
    }
}

export default Header;