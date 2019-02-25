import React from 'react'

class App extends React.Component {
  state = {
  }

  componentDidMount = async () => {
    try {
      await this.getProfilefromDB()
      await this.getAllQuestion()
      this.handleChangePage()
    } catch (error) {
      console.log(error)
    }
  }
 

  render() {
    return (
      <div className="container">
        <div className="container-fulid">
        TakeMeTour
      </div>
      </div>
    )
  }
}

export default App
