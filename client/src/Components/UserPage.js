import React, { Component } from 'react'

class UserPage extends Component {
    render() {
        return(
            <div>
                <h1>UserPage</h1>
                <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default UserPage