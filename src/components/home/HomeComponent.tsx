import { useAppSelector } from '../../hooks/StateHooks';
import './HomeComponent.scss';

export const HomeComponent = () => {
    const loginName = useAppSelector((state) => state.login.name);

    return(
        <div>
            <h1>Home Page</h1>
            <span>Hello {loginName}!</span>
        </div>
    );
};
