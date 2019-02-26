import React, { Component } from 'react'

class array extends Component {
  componentDidMount () {
    console.log('let arg = sarah', 'alex', 'john', 'jane ')
    let x = ['sarah', 'alex', 'john', 'jane']
    console.log('shift left 3 time')
    this.shift(x,'left',3)
    console.log('shift right 3 time')
    this.shift(x,'right',3)
  }
  shift = (arg,method,num)=>{
    if(method==='left'){
    for (let index = 0; index < num; index++) {
    let temp = arg.shift()
    arg.push(temp)
        }
    }else if(method ==='right'){
        for (let index = 0; index < num; index++) {
            let temp = arg.pop()
            arg.unshift(temp)
                }
    }
    console.log(arg)
  }
  render () {
    return (
      <div>
Test shift see in log

      </div>
    )
  }
}

export default array
