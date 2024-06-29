import React from "react";

const Sidebar = () => {
    return (
        <div className="d-flex" style={{ height: '100vh' }}>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: "280px" }}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span className="fs-4">KHU VỰC QUẢN TRỊ</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="#" className="nav-link active" aria-current="page">
                            Trang chủ
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link link-body-emphasis">
                            Quản lý phạm nhân
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link link-body-emphasis">
                            Quản lý phòng gym
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link link-body-emphasis">
                            Quản lý người thăm
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link link-body-emphasis">
                            Quản lý nhân viên
                        </a>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <b>Bạn là: Admin</b>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
