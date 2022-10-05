import React from 'react';
import '../style.scss';
import { AlignRightOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';

export default function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <h1>Sprivaten</h1>
            </div>
            <div className="header-right">
                <div className="header-nav-bar">
                    <ul>
                        <li>
                            <a href="/home">Home</a>
                        </li>
                        <li>
                            <a href="/product">Product</a>
                        </li>
                        <li>
                            <a href="/pricing">Pricing</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                        <li className="nav_bar_icon">
                            <SearchOutlined />
                        </li>
                        <li className="nav_bar_icon">
                            <ShoppingCartOutlined />
                        </li>
                    </ul>
                </div>
                <div className="icon">
                    <AlignRightOutlined />
                </div>
            </div>
        </div>
    );
}
