import React, { Component } from 'react';
import axios from 'axios';


class CreCom extends Component {
  
    constructor(props) {
        super(props);
        // this.onHandleInput = this.onHandleInput.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.state={
          news_id: this.props.news_id,
          username: '',
          comment: '',
          nameError: '',
          comError: ''
        }
    }
    onHandleInput = (e) => {
      const isCheckbox=e.target.type === "checkbox"
      this.setState({
        [e.target.name]: isCheckbox ? e.target.checked : e.target.value 
      });
      console.log(this.state);
    };
    validate = () => {
      let nameError = "";
      let comError = "";
  
      if (!this.state.username) {
        nameError = "Username cannot be blank";
      }
  
      if (!this.state.comment) {
        comError = "Comment cannot be blank";
      }
  
      if (nameError || comError) {
        this.setState({ nameError, comError });
        return false;
      }
  
      return true;
    };
    onSubmit = (e) => {
      const {news_id, username, comment } = this.state;
      console.log(username);
      const isValid = this.validate();
      if(isValid) {
        axios.post(`http://localhost:4000/news/${news_id}/comments`, { username, comment })
        .then((result) => {
          this.props.history.push(`/news/${news_id}`);
          this.setState({
            news_id: this.props.news_id,
            username: '',
            comment: '',
          })
        })
        .catch((error) => {
          console.log("Error" + error)
        })
      }
    }
    render() {
      const {username,comment, nameError, comError } = this.state;
        return (
            <div>
                {/* Comments Form */}
            <div className="card my-4">
              <h5 className="card-header">Leave a Comment:</h5>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <textarea className="form-control"  
                              placeholder="UserName" rows={1}
                              value={username}
                              name="username"
                              onChange={this.onHandleInput} />
                    <div style={{color:'red', fontSize: 11}}>{nameError}</div>
                    <p></p>
                    <textarea className="form-control" 
                              placeholder="Comment" rows={3} 
                              value={comment}
                              name="comment"
                              onChange={this.onHandleInput} />
                    <div style={{color:'red', fontSize: 11}}>{comError}</div>
                    </div>
                  <button type="submit" className="btn btn-primary" style={{backgroundColor: "#585858"}} onClick={this.onSubmit}>Submit</button>
                </form>
              </div>
            </div>
            </div>
        );
    }
}

export default CreCom;