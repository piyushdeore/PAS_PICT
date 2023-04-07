import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../../Components/MainNavigation'

export default class HomeLayout extends Component {
  render() {
    return (
      <div>
        <MainNavigation/>
        <Outlet/>
      </div>
    )
  }
}
