import { useNavigate } from 'react-router';
import { useAppSelector } from '../../hooks/StateHooks';
import './HomeComponent.scss';

export const HomeComponent = () => {
    const navigate = useNavigate();

    const loginName = useAppSelector((state) => state.user.currentUser);

    const goLogin = () => {
        navigate('/login');
    };

    const goRegistration = () => {
        navigate('/registration');
    };

    return (
        <div className='container'>
            <h1>Home Page</h1>
            <span>Hello {loginName}!</span>
            <div className="container_actions">
                <button className='btn' onClick={goLogin}>Выйти</button>
                <button className='btn' onClick={goRegistration}>Регистрация</button>
            </div>
        </div>
    );
};
