import React, { Component } from 'react'
import UserService from '../Services/UsersService'
import AddUser from './addUser';
import DeleteUser from './deleteUser';
export default class UserList extends Component{
    
     constructor(props){
         super(props);
         this.state={users:[]}
     }
    
    componentDidMount(){
        UserService.getUsers().then(res=>{this.setState({users:res.data})});
    }
  
    render(){
        return(
            <div>
            <AddUser />
            <ul>
                {this.state.users.map(user=><li>{user.name}</li>)}
            </ul>
            <DeleteUser />
            </div>
        )
    }



}