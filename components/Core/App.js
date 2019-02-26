import React from 'react'
import Footer from './Footer'
import styled from 'styled-components'
import colors from '../../config/colors'

const BgColors = styled.div`
  background: ${colors.bgcolor};
  @media (max-width : 768px) {
    height: 100%;
  }
`
const Div = styled.div`
  height:38.5em;
`
class App extends React.Component {
  render () {
    return (
      <BgColors>
        <Div className="container">
          <div className="container-fulid">
            <h1>TakeMeTour</h1>
            <a href="/array">Array shift</a>
            <br></br>
            <br></br>
            <a href="/hero">Hero Stats</a>
            <br></br>
            <br></br>
            <a href="/joke">Jokes From Chuck Norris Api</a>
          </div>
        </Div>
        <Footer/>
      </BgColors>
    )
  }
}

export default App
