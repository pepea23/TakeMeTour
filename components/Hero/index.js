import React, { Fragment, Component } from 'react'
import ShowHero from './ShowHero'
import Heros from './../../hero.json'

class index extends Component {
  componentDidMount () {
  Heros.map(data =>{
    if(data.kill>0&&data.death>0){
      data.ratio =(data.kill/data.death).toFixed(2);
    }
    else{
      data.ratio = (data.kill).toFixed(2);
    }
  })
  this.setState({
    heros:Heros
  })  
}
networthAvgs = ()=>{
  let avg=0;
 Heros.map(data=>{
   avg+=data.networth
 })
 avg/=Heros.length
return avg.toFixed(2)
}
heroAttributeAvgs=(att)=>{
  let avg=0;
  Heros.map(data=>{
    if(data.primary_attribute===att)
    avg+=data.level
  })
  avg/=Heros.length
 return avg.toFixed(2)
}
findAssist(){
let bestAssit={
  name:'No one',
  assist:0
}
Heros.map(data=>{
    if (data.assist > bestAssit.assist) {
      bestAssit.name=data.name
      bestAssit.assist=data.assist
    }
})
return bestAssit.name
}
findwrostRatio(){
  let wrostRatio={
    name:'No one',
    ratio:Infinity
  }
  Heros.map(data=>{
      if (data.ratio < wrostRatio.ratio) {
        wrostRatio.name=data.name
        wrostRatio.ratio=data.ratio
      }
  })
  return wrostRatio.name
}
  
  state ={
      heros:[]
  }
  render () {
    return (
      <Fragment>
        <ShowHero 
        hero={this.state.heros} 
        networthAvgs={this.networthAvgs}
        heroAttributeAvgs={this.heroAttributeAvgs}
        findAssist={this.findAssist}
        findwrostRatio={this.findwrostRatio}
        ></ShowHero>
      </Fragment>
    )
  }
}

export default index
