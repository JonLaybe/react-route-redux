import { useState } from 'react';
import './RegistrationComponent.scss';
import {
    Box,
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    CircularProgress
} from '@mui/material';
import { PersonAddOutlined } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../hooks/StateHooks';
import { useNavigate } from 'react-router';
import { registerUser } from '../../store/UserReducer';

interface ErrorsState {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

export const RegistrationComponent = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<ErrorsState>({});
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const listUsers = useAppSelector((state) => state.user.list);

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email === '' || password === '')
            return;

        let users = listUsers.filter(u => u.email === email);

        if (users.length > 0)
            return;

        dispatch(registerUser({ name: name, email: email, password: password }));
        navigate('/');
    };

    return (
        <div className="registerContainer" >
            <Container component="main" maxWidth="xs" disableGutters >
                <Paper
                    elevation={3}
                    sx={{
                        padding: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        borderRadius: 3
                    }
                    }
                >
                    <Box
                        sx={{
                            margin: 1,
                            backgroundColor: 'success.main',
                            color: 'white',
                            borderRadius: '50%',
                            p: 1.5,
                            display: 'flex'
                        }}
                    >
                        <PersonAddOutlined />
                    </Box>

                    <Typography component="h1" variant="h5" sx={{ mt: 1 }}>
                        Регистрация
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                        Создайте новый аккаунт
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: '100%' }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Ваше имя"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            error={Boolean(errors.name)}
                            helperText={errors.name}
                            disabled={isLoading}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email адрес"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={Boolean(errors.email)}
                            helperText={errors.email}
                            disabled={isLoading}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            autoComplete="new-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={Boolean(errors.password)}
                            helperText={errors.password}
                            disabled={isLoading}
                        />

                        < TextField
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Повторите пароль"
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            autoComplete="new-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            error={Boolean(errors.confirmPassword)}
                            helperText={errors.confirmPassword}
                            disabled={isLoading}
                        />

                        < Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="success"
                            disabled={isLoading}
                            sx={{ mt: 3, mb: 1, py: 1.2, fontWeight: 600, textTransform: 'none', fontSize: '16px' }}
                        >
                            {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Зарегистрироваться'}
                        </Button>
                    </Box>
                </Paper>
            </Container >
        </div >
    );
};
