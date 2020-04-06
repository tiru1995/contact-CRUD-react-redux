import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actiontype} from './action'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Createuser from './CreateUser';
import Listuser from './ListUser'
import users from './users'
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.updatedUser = {};
  }

  componentDidMount(){
this.props.onLoadUsers()
  }

  onChangeHandler=(e)=>{
const keys=e.target.name;
const value=e.target.value
if(this.props.user){
this.updatedUser[keys]=value
const tempobj={...this.props.user,...this.updatedUser}
this.props.onEditUser(tempobj)
}
else{
const id =this.props.users.length +1
this.updatedUser.id=id
this.updatedUser[keys]=value
}
}

onSubmitHandler=(e)=>{
  e.preventDefault()
  if(this.props.user){
    const obj=this.props.users;
    obj[this.props.user.id-1]=this.props.user;
    this.props.onUpdateUser([...obj])
  }else{
    this.props.onAddingUser(this.updatedUser)
    this.updatedUser = {};
  }
}


  render(){
    console.log(this.props)
    
    return (
      <div className='crud-form'>
      <div className='row'>
      <div className='col-5'>
      <Createuser  onChangeHandler={this.onChangeHandler} submituser={this.onSubmitHandler} user={this.props.user}/>
      </div>
<div className='col-6'>
<Listuser userdata={this.props.users} deleteuser={this.props.onDeleteUser} edituser={this.props.onEditUser} />
</div>       
        </div>
        </div>
    )
  }
  
}

const mapstate =(state)=>{
  return{
    users:state.users,
    user:state.user

  }
}

const mapdispatch =(dispatch)=>{
  return{
onLoadUsers:()=>dispatch({type:actiontype.USER_LIST,payload:users}),
onDeleteUser:(userid)=>dispatch({type:actiontype.DELETE_USER,payload:userid}),
onAddingUser:(user)=>dispatch({type:actiontype.INSERT_USER,payload:user}),
onEditUser:(user)=>dispatch({type:actiontype.EDIT_USER,payload:user}),
onUpdateUser:(user)=>dispatch({type:actiontype.UPDATE_USER,payload:user})
  }
}
export default connect(mapstate,mapdispatch)(App);
