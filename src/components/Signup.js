import React, { useRef, useState} from 'react' 
import { useAuth } from '../contexts/AuthContext'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Signup() {
const emailRef = useRef(null)
const passwordRef = useRef(null)
const passwordConfirmRef = useRef(null)
const { signup, currentUser, checkIfEmailIsRegistered } = useAuth()
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)


async function handleSubmit(e) {
    e.preventDefault()
    const password = passwordRef.current.value
    const passwordConf = passwordConfirmRef.current.value

    if (( password === passwordConf) && (password.length >= 6)) {
        setError('')
        setLoading(true)
        checkingEmail(await checkIfEmailIsRegistered(emailRef.current.value))
        await signup(emailRef.current.value, passwordRef.current.value)
        // console.log(signup(emailRef.current.value, passwordRef.current.value))
    } else if (( password !== passwordConf) && (password.length >= 6)) {
        setError('Passwords do not match!')
    } else if (password.length < 6) {
        setError('Password needs to be at least 6 characters!')
    }
    
}

async function checkingEmail(email) {
    if (email[0] === "password") {
        setError('Email address already registered')
        setLoading(false)
    }
}

function throwError(err) {
    if (err.length > 0) {
       return <Alert variant='danger'>{error}</Alert>
    }
}



    return (
        <div className="sign_up_background">
            <div className='sign_up_cont'>
                <Card className='w-50' style={{minWidth: '500px'}}>
                    <Card.Body>
                        <h2 className="text-center mb-4 sign_up_form_title">Sign Up</h2>
                        {currentUser && console.log(JSON.stringify(currentUser.email))}
                        {throwError(error)}
                        <Form onSubmit={handleSubmit} className="w-100">
                            <Form.Group id='email'>
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" ref={emailRef} required/>
                            </Form.Group>
                            <Form.Group id='password'>
                                <Form.Label>Password:</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required/>
                            </Form.Group>
                            <Form.Group id='password_confirm'>
                                <Form.Label>Password Confirmation:</Form.Label>
                                <Form.Control type="password" ref={passwordConfirmRef} required/>
                            </Form.Group>
                            <Button disabled={loading} className='w-100' type='submit'>Sign Up</Button>
                        </Form>
                    </Card.Body>

                </Card>
                <div className="w-100 text-center mt-2">
                    Already have an account? <Link to='/Login' >Log In</Link>
                </div>
            </div>
        </div>
    )
}