import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-info text-info">
                <div className="container">
                <Link className="navbar-brand" to="/">วท.ตราด</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">หน้าเเรก</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">เกี่ยวกับ</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    เเผนกวิชา
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="http://www.trattc.ac.th/~electric/" target="_blank">เเผนกวิชาช่างไฟฟ้า</a>
                                    <a className="dropdown-item" href="http://www.trattc.ac.th/~electric/" target="_blank">เเผนกวิชาช่างอิเล็กทรอนิกส์</a>
                                    <a className="dropdown-item" href="http://www.trattc.ac.th/~electric/" target="_blank">เเผนกวิชาช่างก่อสร้าง</a>
                                        <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="http://www.trattc.ac.th/~nexttrat/" target="_blank">วิทยาลัยเทคนิคตราด</a>
                                </div>
                            </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/card">ข่าวสาร</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">ติตต่อเรา</Link>
                                    </li>
                        </ul>                  
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;