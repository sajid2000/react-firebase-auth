import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
    const [error, setError] = useState('');

    const { currentUser, logout } = useAuth();

    const handleLogout = (e) => {
        e.preventDefault();

        logout();
    };

    return (
        <React.Fragment>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email:</strong> {currentUser.email}
                    <Link to="update-profile" className="btn btn-primary mt-3 w-100">Update Profile</Link>
                </Card.Body>
            </Card>
            <h3 className="w-100 text-center mt-2">
                <Button variant="line" onClick={handleLogout}>Logout</Button>
            </h3>
        </React.Fragment>
    );
};