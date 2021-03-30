import React, { useRef} from 'react' 
import { useAuth } from '../contexts/AuthContext'
import { Form, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Signup() {
const emailRef = useRef(null)
const passwordRef = useRef(null)
const passwordConfirmRef = useRef(null)
const { signup } = useAuth()


function handleSubmit(e) {
    e.preventDefault()

   

    signup(emailRef.current.value, passwordRef.current.value)

}

    return (
        <div className="sign_up_background">
            <div className='sign_up_cont'>
                <Card className='w-50' style={{minWidth: '500px'}}>
                    <Card.Body>
                        <h2 className="text-center mb-4 sign_up_form_title">Sign Up</h2>
                        <Form onSubmit={handleSubmit} className="w-100">
                            <Form.Group id='email'>
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" ref={emailRef} required/>
                            </Form.Group>
                            <Form.Group id='password'>
                                <Form.Label>Password:</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required/>
                            </Form.Group><Form.Group id='password_confirm'>
                                <Form.Label>Password Confirmation:</Form.Label>
                                <Form.Control type="password" ref={passwordConfirmRef} required/>
                            </Form.Group>
                            <Button className='w-100' type='submit'>Sign Up</Button>
                        </Form>
                    </Card.Body>

                </Card>
                <div className="w-100 text-center mt-2">
                    Already have an account? <Link to='/' >Log In</Link>
                </div>
            </div>
        </div>
    )
}