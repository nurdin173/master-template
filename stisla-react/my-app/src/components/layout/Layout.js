import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Content from './Content'

export default class Layout extends Component {
    render() {
        return (
            <div className="main-wrapper main-wrapper-1">
                <Header />
                <Sidebar />
                <Content />
                <Footer />
            </div>
        )
    }
}
