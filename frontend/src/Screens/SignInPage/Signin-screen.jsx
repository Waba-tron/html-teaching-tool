import React, {useState} from 'react';
import '../../design-tokens/_scss-varibles.scss';
import FormInput from '../../components/Form-Inputs/Form-Input.component';
import Button from '../../components/Buttons/Button.component';
import './Signin.styles.scss';

const SigninScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="login-container">

            <div className="login-form-img">
                <img src="https://blog.udacity.com/wp-content/uploads/2020/06/HTML_Blog-scaled.jpeg" alt="Girl in a jacket" />
            </div>


            <div className="login-form">
            <h1>Sign In</h1>
                <form>
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                    label="email"
                    required
                />
                <FormInput name="password"
                    type="password" 
                    value={password} 
                    handleChange={e => setPassword(e.target.value)}
                    label="Password"
                />
                
           



                <div className="btn-container">
                    <Button text={'Sign In'}/>
                </div>
              
                </form>

            </div>
       
        </div>
    )
}

export default SigninScreen;
