import React, { useRef, useState} from 'react' 
import { useAuth } from '../contexts/AuthContext'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

export default function Signup() {
const emailRef = useRef(null)
const passwordRef = useRef(null)
const history = useHistory()

const { login, currentUser } = useAuth()
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)


async function handleSubmit(e) {
    e.preventDefault()
    const password = passwordRef.current.value
    console.log(JSON.stringify(currentUser.password))

    try {
        setError('')
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        history.push('/Dashboard')
    } catch {
        setLoading(false)
        setError('Incorrect Username/Password!')
    }
    
}

function passwordsDoNotMatch(err) {
    if (err.length > 0) {
       return <Alert variant='danger'>{error}</Alert>
    }
}



    return (
        <div className="sign_up_background">
            <div className='sign_up_cont'>
                <Card className='w-50' style={{minWidth: '500px'}}>
                    <Card.Body>
                        <h2 className="text-center mb-4 sign_up_form_title">Log In</h2>
                        {currentUser && console.log(JSON.stringify(currentUser.email))}
                        {passwordsDoNotMatch(error)}
                        <Form onSubmit={handleSubmit} className="w-100">
                            <Form.Group id='email'>
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" ref={emailRef} required/>
                            </Form.Group>
                            <Form.Group id='password'>
                                <Form.Label>Password:</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required/>
                            </Form.Group>
                            <Button disabled={loading} className='w-100' type='submit'>Log In</Button>
                        </Form>
                    </Card.Body>

                </Card>
                <div className="w-100 text-center mt-2">
                    Don't have an account? <Link to='/Signup' >Sign Up</Link>
                </div>
            </div>
        </div>
    )
}