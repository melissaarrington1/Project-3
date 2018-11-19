import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

class HomePage extends Component {
    render() {
        return(
            <div>
                <h1>Welcome To Your Weather App</h1>
                <Button variant="contained" color="primary"> <Link to='/api/users'>Click Here to Enter</Link></Button>
            </div>
        )
    }

}

export default HomePage