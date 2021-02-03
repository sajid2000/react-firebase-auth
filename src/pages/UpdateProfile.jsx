import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';

export default function UpdateProfile() {
    const [error, setError] = useState('');

    const { currentUser } = useAuth();

    return (
        <React.Fragment>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Update Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                </Card.Body>
            </Card>
            <h3 className="w-100 text-center mt-2">
                bottom
            </h3>
        </React.Fragment>
    );
};