import React, { Component } from 'react'
import {
  Card,
  Form,
  Input,
  Button,
  Select as AntDesignSelect
} from 'antd'
const FormItem = Form.Item

class joke extends Component {
  render () {
    return (
      <div className=" container-fluid">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <Card className='mt-5'>
              <form>
                <div className=" container-fluid">
                  <div className="row">
                    <div className="col-6">
                      <FormItem>
                FirstName :
                      </FormItem>
                    </div>
                    <div className="col-6">
                      <FormItem>
                        <Input
                          onChange={({ target: { name, value } }) =>
                            this.props.handleField(name, value)
                          }
                          name="firstName"
                          value={this.props.user.firstName}
                        />
                      </FormItem>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <FormItem>
                LastName :
                      </FormItem>
                    </div>
                    <div className="col-6">
                      <FormItem>
                        <Input
                          onChange={({ target: { name, value } }) =>
                            this.props.handleField(name, value)
                          }
                          name="lastName"
                          value={this.props.user.lastName}
                        />
                      </FormItem>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <FormItem>
                JokeId :
                      </FormItem>
                    </div>
                    <div className="col-6">
                      <FormItem>
                        <Input
                          type="number"
                          onChange={({ target: { name, value } }) =>
                            this.props.handleField(name, value)
                          }
                          name="id"
                          value={this.props.user.id}
                        />
                      </FormItem>
                    </div>
                  </div>
                </div>

              </form>
              <div className="row">
                <Button onClick={() => this.props.handleJoke()}>Joke!</Button>
              </div>
              <div className='row'>
                {this.props.jokes.joke}
              </div>
            </Card>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    )
  }
}

export default joke
