import { useDispatch } from 'react-redux';
import { login } from '../../../../../features/users/userActive';
import { useForm } from "react-hook-form";



import './LoginForm.css'

export const LoginForm = () => {
    const dispatch = useDispatch()
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => dispatch(login(data))

    return (
        <>
        <div className='LoginForm__layer'></div>
            <div className='LoginForm__form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" name="user" id="user" placeholder='User...' {...register('user', {required: true})}
                        aria-invalid={errors.user ? "true" : "false"} />
                    <input type="password" name="pass" id="pass" placeholder='Pass..'  {...register('pass', {required: true})}
                        aria-invalid={errors.pass ? "true" : "false"} />
                    <button>Login</button>
                    <div>{errors.user?.type === 'required' && <span role="alert">User is required</span>}
                    {errors.pass?.type === 'required' && <span role="alert">  Pass is required</span>}</div>
                </form>
            </div>
        </>
    )
}
