import React, {useState} from 'react';

import FormInput from '../../components/Form-Inputs/Form-Input.component';

const SigninScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>

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
            </form>
       
        </div>
    )
}

export default SigninScreen;
