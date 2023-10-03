import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu size='massive'>
                <Menu.Item header 
                        href='/home' 
                        name='homePage'
                        active={activeItem === 'Devlink Marketplace'}
                        onClick={this.handleItemClick}>DevLink Marketplace</Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item
                        href='//example.com' 
                        name='findDev'
                        active={activeItem === 'findDev'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        href='//example.com' 
                        name='findJobs'
                        active={activeItem === 'findJobs'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        href='//localhost:3000/login'   
                        name='login'
                        active={activeItem === 'login'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        href='//localhost:3000/create-account' 
                        name='createAccount'
                        active={activeItem === 'createAccount'}
                        onClick={this.handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        )
    }
}