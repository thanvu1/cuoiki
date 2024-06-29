import React, { useState } from "react";
import { data } from "../Constants/data";
import 'bootstrap/dist/css/bootstrap.min.css';

const List = () => {
    const [people, setPeople] = useState(data.people);
    const [newPerson, setNewPerson] = useState({ id: '', name: '', date: '', address: '', crime: '' });
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [showNotification, setShowNotification] = useState(false);

    const handleDelete = (index) => {
        const updatedPeople = [...people];
        updatedPeople.splice(index, 1);
        setPeople(updatedPeople);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 7000);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newId = people.length ? Math.max(...people.map(person => person.id)) + 1 : 1;
        const personWithId = { ...newPerson, id: newId };
        setPeople([...people, personWithId]);
        setNewPerson({ id: '', name: '', date: '', address: '', crime: '' });
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
                <h1>Danh Sách Phạm Nhân</h1>
                <button
                    type="button"
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#addPersonModal"
                >
                    Thêm phạm nhân
                </button>
                <form onSubmit={handleSubmit}>
                    <div className="modal fade" id="addPersonModal" tabIndex="-1" aria-labelledby="addPersonModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="addPersonModalLabel">Thêm phạm nhân</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Họ và tên</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            value={newPerson.name}
                                            onChange={(e) => setNewPerson({ ...newPerson, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="date" className="form-label">Ngày sinh</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="date"
                                            value={newPerson.date}
                                            onChange={(e) => setNewPerson({ ...newPerson, date: e.target.value })}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="address" className="form-label">Địa chỉ</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address"
                                            value={newPerson.address}
                                            onChange={(e) => setNewPerson({ ...newPerson, address: e.target.value })}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="crime" className="form-label">Tội danh</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="crime"
                                            value={newPerson.crime}
                                            onChange={(e) => setNewPerson({ ...newPerson, crime: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                                    <button type="submit" className="btn btn-primary">Thêm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                
            </div>
            {showNotification && (
                <div className="alert alert-success mt-2">
                    Phạm nhân đã được xóa! Phạm nhân đã được xóa khỏi hệ thống.
                </div>
            )}
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Mã phạm nhân</th>
                        <th>Họ và tên</th>
                        <th>Ngày sinh</th>
                        <th>Địa chỉ</th>
                        <th>Tội danh</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((person, index) => (
                        <tr key={index}>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.date}</td>
                            <td>{person.address}</td>
                            <td>{person.crime}</td>
                            <td>
                                <button className="btn btn-info btn-sm me-2">Sửa</button>
                                <button 
                                    className="btn btn-danger btn-sm" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="#deleteConfirmationModal"
                                    onClick={() => setDeleteIndex(index)}
                                >
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            {/* Delete Confirmation Modal */}
            <div className="modal fade" id="deleteConfirmationModal" tabIndex="-1" aria-labelledby="deleteConfirmationModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteConfirmationModalLabel">Xác nhận xóa phạm nhân</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Bạn có chắc chắn muốn xóa dữ liệu phạm nhân này?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                            <button type="button" className="btn btn-danger" onClick={() => handleDelete(deleteIndex)} data-bs-dismiss="modal">Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;
