import React from "react";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import ListGroup from "react-bootstrap/ListGroup";
import CloseButton from "react-bootstrap/CloseButton";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ShowUpdate from "./ShowUpdate";
import Badge from 'react-bootstrap/Badge';
//gfdgdf
class GetINterested extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interested: [],
      showUp: false,
    };
  }
  handleUpdate = (event) => {
    const { user } = this.props.auth0;
    let email = user.email;
    event.preventDefault();
    console.log("hi");
    const id = this.state.interested[0]._id;
    console.log(this.state.interested);
    console.log(id);
    var checkboxes = document.getElementsByName("Interested")
    var arr = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      arr.push(checkboxes[i].value)
    }
  }
    let obj = {
      email: user.email,
      interested: arr,
    };
    axios
      .put(`${process.env.REACT_APP_URL}interested/${id}?email=${email}`, obj)
      .then((result) => {
        console.log(result.data);
        this.setState({
          interested: result.data,
        });
        this.handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  openModal = () => {
    this.setState({
      showUp: true,
    });
  };
  handleClose = () => {
    this.setState({
      show: false,
      showUp: false,
    });
  };
  componentDidMount = () => {
    console.log("hi from getinterested");
    const { user } = this.props.auth0;
    let email = user.email;
    console.log("hi");
    axios
      .get(`${process.env.REACT_APP_URL}interested?email=${email}`)

      .then((result) => {
        console.log(result.data);
        this.setState({
          interested: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        {this.state.interested.map((element) => {
          return (
            
              <div>
                
                <Badge bg="light" text="dark">
                {element.interested}
                </Badge>{" "}
             </div>
           
          );
        })}
       
        <Button variant="warning" onClick={() => this.openModal()}>
          Update my interest Genres Games
        </Button>
        <ShowUpdate
          showUp={this.state.showUp}
          handleClose={this.handleClose}
          handleUpdate={this.handleUpdate}
          interested={this.state.interested}
        ></ShowUpdate>
      </div>
    );
  }
}
export default withAuth0(GetINterested);
