import React, { Fragment, Component } from 'react'
import Joke from './joke'
import jokeService from './../../service/JokeService'
class index extends Component {

  state = {
    user:{
      firstName:'',
      lastName:'',
      id:0,
    },
    jokes:[{
      categories:[''],
      id:0,
      joke:'Hahah!'
    }]
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
  handleNum= async(e)=>{
    let res = await jokeService.getRandomJokes(e,this.state.user)
    this.setState({
      jokes:res.data.value
    })
  }
  handleJoke=async (method)=>{
   let res;
   if(method.target.value==="id"){
     res = await jokeService.getJokebyId(this.state.user.id,this.state.user)
     let data = [''] 
     data [0] = res.data.value
     if(res.data.type===`NoSuchQuoteException`){
       data=[{
        categories:[''],
        id:0,
        joke: res.data.value
      }]
      this.setState({
        jokes:data
      })
    }else{
      this.setState({
        jokes:data
      })
    }
   }
   else if(method.target.value==="random"){
     res = await jokeService.getRandomJoke(this.state.user)
     let data = [''] 
     data [0] = res.data.value
      this.setState({
        jokes:data
      })
   }
    
  }
  render () {
    return (
      <Fragment>
        <Joke 
        user ={this.state.user}
        jokes= {this.state.jokes}
         handleField={this.handleField}
         handleNum={this.handleNum}
          handleJoke={this.handleJoke}/>
      </Fragment>
    )
  }
}

export default index
