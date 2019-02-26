import React from 'react'
import styled from 'styled-components'
import App from './../components/Core/App'
import colors from '../config/colors'

const BgColors = styled.div`
  background: ${colors.bgcolor};
  @media (max-width : 768px) {
    height: 100%;
  }
`

class componentName extends React.Component {
  render () {
    return (
      <BgColors>
        <App />
      </BgColors>
    )
  }
}

export default componentName
