import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import UpdateProfile from './pages/UpdateProfile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';

function App() {
    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{minHeight: '100vh'}}
        >
            <div className="w-100" style={{maxWidth: '400px'}}>
                <Router>
                    <AuthProvider>
                        <Switch>
                            <PrivateRoute exact path="/" component={Dashboard} />
                            <Route path="/update-profile" component={UpdateProfile} />
                            <Route path="/forgot-password" component={ForgotPassword} />
                            <Route path="/signup" component={Signup} />
                            <Route path="/login" component={Login} />
                        </Switch>
                    </AuthProvider>
                </Router>
            </div>
        </Container>
    );
}

export default App;
