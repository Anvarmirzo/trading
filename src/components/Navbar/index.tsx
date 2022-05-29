import React from 'react';
import {Avatar, Menu, Typography} from 'antd';
import {NavLink} from 'react-router-dom'
import icon from '../../assets/images/cryptocurrency.png';
import {FundOutlined, HomeOutlined, MoneyCollectOutlined} from '@ant-design/icons';


interface NavbarProps {

};
export const Navbar = (props: NavbarProps) => {
    return (
        <nav className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className="logo">
                    <NavLink to="/">Cryptoverse</NavLink>
                </Typography.Title>
            </div>
            <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined/>}>
                    <NavLink to="/">Home</NavLink>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined/>}>
                    <NavLink to="/cryptocurrencies">Cryptocurrencies</NavLink>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined/>}>
                    <NavLink to="/exchanges">Exchanges</NavLink>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined/>}>
                    <NavLink to="/news">News</NavLink>
                </Menu.Item>
            </Menu>
        </nav>
    );
};