import React from 'react';
import './style.css'; // Asegúrate de importar el archivo CSS

function UserList({ users }) {
    if (!users || users.length === 0) {
        return <p>Cargando usuarios...</p>; 
    }

    return (
        <div className="table-container">
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;