import React from 'react';
import { Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth/useAuth';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const SignIn = () => {
    const { handleSignIn, handleEmailChange, handlePasswordChange, error, setIsLoading, setError, handleGoogleSignIn } = useAuth();
    const location = useLocation();
    console.log(" this is location", location)
    const history = useHistory();
    console.log("came from", location.state?.from);
    const redirect_uri = location.state?.from || '/home';

    const handleSignInUsingEmail = (e) => {
        e.preventDefault()
        handleSignIn()
            .then(() => {
                history.push(redirect_uri)
                alert('successfuly signed in')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    const handleSignInUsingGoogle = (e) => {
        e.preventDefault()
        handleGoogleSignIn()
            .then(() => {
                history.push(redirect_uri)
                alert('successfuly signed in')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    return (
        <div>
            <MenuBar></MenuBar>
            <div className="d-flex justify-content-center align-items-center my-5">
                <Form onSubmit={handleSignInUsingEmail} className="form">
                    <p className="text-primary">Please Sign In </p>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                    </Form.Group>
                    <small className="text-danger">{error} </small>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Already Signed up?" />
                    </Form.Group>

                    <button type="submit" className="button">
                        Sign In
                    </button>
                   <span className="mx-2">or</span>
                    <button onClick={handleSignInUsingGoogle} type="submit" className="button">
                    Sign in Using Google
                </button>
                </Form>


            </div>

            <Footer></Footer>
        </div>
    );
};

export default SignIn;