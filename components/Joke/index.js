import React, { Fragment, Component } from 'react'
import Joke from './joke'
import jokeService from './../../service/JokeService'
class index extends Component {

  state = {
    user:{
      firstName:'',
      lastName:'',
      id:0
    },
    jokes:{
      categories:[''],
      id:0,
      joke:'Hahah!'
    }
  }
  handleField =(name,value)=>{
    let userDb = this.state.user
    this.setState({
  user:{
    ...userDb,
    [name]:value
  }
})
  }
  handleJoke=async (method)=>{
   let res = await jokeService.getJokebyId(this.state.user.id,this.state.user)
    this.setState({
      jokes:res.data.value
    })
  }
  render () {
    return (
      <Fragment>
        <Joke 
        user ={this.state.user}
        jokes= {this.state.jokes}
         handleField={this.handleField}
          handleJoke={this.handleJoke}/>
      </Fragment>
    )
  }
}

export default index
