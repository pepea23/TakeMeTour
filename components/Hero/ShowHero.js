import React, { Component } from 'react'

import { Table, Divider, Tag } from 'antd'

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name'
}, {
  title: 'Networth',
  dataIndex: 'networth',
  key: 'networth'
}, {
  title: 'Level',
  dataIndex: 'level',
  key: 'level'
}, {
  title: 'Kill',
  dataIndex: 'kill',
  key: 'kill'
}, {
  title: 'Death',
  dataIndex: 'death',
  key: 'death'
}, {
  title: 'Assist',
  dataIndex: 'assist',
  key: 'assist'
},
{
  title: 'Ratio',
  key: 'ratio',
  dataIndex: 'ratio'
},
{
  title: 'Primary_attribute',
  key: 'primary_attribute',
  dataIndex: 'primary_attribute'
}]

class ShowHero extends Component {
  render () {
    return (
      <div>
        <Table columns={columns} dataSource={this.props.hero} />
        <div>All Networth avgs : {this.props.networthAvgs()}</div>
        <div>All Primary_attribute Interligent avgs : {this.props.heroAttributeAvgs('intelligent')}</div>
        <div>All Primary_attribute Agility avgs : {this.props.heroAttributeAvgs('agility')}</div>
        <div>All Primary_attribute Strength avgs : {this.props.heroAttributeAvgs('strength')}</div>
        <div>Most Assist Hero : {this.props.findAssist()}</div>
        <div>Wrost ratio Hero : {this.props.findwrostRatio()}</div>
      </div>
    )
  }
}

export default ShowHero
