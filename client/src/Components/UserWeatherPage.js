import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import Portal from '@material-ui/core/Portal';
import axios from 'axios'

class UserWeatherPage extends Component {
    
    state = {
        city: '',
        state: '',
        currentTemp: ''
    };
    
    handleDelete = () => {
        axios.delete(`/api/users/${this.props.match.params.userId}`).then(res => {
                this.props.history.push("/users");
                })
        }
    

    // onDelete() {
    //     let userId = this.state.userId;
    //     axios.delete(`http://localhost:3000/api/users/${userId}`)
    //       .then(response => {
    //         this.props.history.push("/");
    //       })
    //       .catch(err => console.log(err));
    //   }

    render() {
        return(
            <Portal>
                <h1>Welcome</h1>
                <h1>View Your Local Weather Below:</h1>
                <h1>Select A City</h1>
                {/* <button onClick={this.onDelete.bind(this)}>Delete User</button> */}
                <Button onClick={this.handleDelete} variant="contained" color="primary"><Link to='/api/users/:userId'>Delete Your Account</Link></Button>
            </Portal>
            
        )
    }

}

export default UserWeatherPage