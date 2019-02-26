import React, { Component } from 'react'
import {
  Card,
  Form,
  Input,
  Button,
  Select as AntDesignSelect
} from 'antd'
import styled from 'styled-components'
const FormItem = Form.Item
const Option = AntDesignSelect.Option
const ButtonsModi = styled(Button)`
`
const CardModi = styled(Card)`
width:30em;
`
const Header = styled.h1`
text-align:center;
color:${props => props.colors.primary};
`
const Div = styled.div`
  height:38.5em;
`
class joke extends Component {
  render () {
    return (
      <Div className=" container-fluid">
        <Header colors={this.props.colors}>Get Jokes From Chuck Norris Api</Header>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <CardModi className='mt-5'>
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
                        <ButtonsModi value="id" onClick={(value) => this.props.handleJoke(value)}>Joke!</ButtonsModi>
                      </FormItem>
                    </div>
                  </div>
                  <div className= "row mb-3">
                    <div className="col-6">
                      <FormItem>
                      Randoms alot jokes :
                      </FormItem>
                    </div>
                    <div className="col-6">
                      <FormItem>
                        <AntDesignSelect
                          name="num"
                          showSearch
                          placeholder="Randoms alot jokes"
                          onChange={this.props.handleNum}>
                          <Option name="num" value="2">2</Option>
                          <Option name="num" value="4">4</Option>
                          <Option name="num" value="6">6</Option>
                        </AntDesignSelect>

                      </FormItem>
                    </div>
                  </div>
                </div>
              </form>
              <div className="row">
                <ButtonsModi value="random" onClick={(value) => this.props.handleJoke(value)}>Random Joke!</ButtonsModi>
              </div>
              <div className='row mt-3'>
                { this.props.jokes.map(data => {
                  return <p>{data.joke}<br/>-----------------------</p>
                })}
              </div>
            </CardModi>
          </div>
          <div className="col-4"></div>
        </div>
      </Div>
    )
  }
}

export default joke
