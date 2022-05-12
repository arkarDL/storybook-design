import { default as Input, default as InputProps } from '../../../../src/components/Input';
import { default as Button, default as ButtonProps } from '../../../../src/components/Button';


const LoginForm = () => {
    return (
        <div className='grid gap-4'>
            <Input label='Email' data-testid='email' name='email' />
            <Input label='Password' data-testid='password' name='password' />
            <Button variant='primary' name='Submit' label='Submit' sx={{ marginTop: '1em' }} />
        </div>
    )
}
export default LoginForm;