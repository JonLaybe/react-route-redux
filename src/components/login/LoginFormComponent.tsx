import { useState } from 'react';
import './LoginFormComponent.scss';
import {
    Box,
    Container,
    Paper,
    Typography,
    TextField,
    InputAdornment,
    IconButton,
    Button
} from '@mui/material';
import { LockOutlined, Visibility, VisibilityOff } from '@mui/icons-material';
import { useAppDispatch } from '../../hooks/StateHooks';
import { useNavigate } from 'react-router';
import { initLong } from '../../store/LoginReducer';

export const LoginFormComponent = () => {
    const [email, setEmail] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(initLong(email));
        navigate('/home');
    };

    return (
        <div className="loginContainer">
            <Container component="main" maxWidth="xs" disableGutters>
                <Paper
                    elevation={3}
                    sx={{
                        padding: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        borderRadius: 3
                    }}
                >
                    <Box
                        sx={{
                            margin: 1,
                            backgroundColor: 'primary.main',
                            color: 'white',
                            borderRadius: '50%',
                            p: 1.5,
                            display: 'flex'
                        }}
                    >
                        <LockOutlined />
                    </Box>

                    <Typography component="h1" variant="h5" sx={{ mt: 1 }}>
                        Вход в аккаунт
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 3 }}>
                        Пожалуйста, введите ваши данные
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: '100%' }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email адрес"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                            autoFocus
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            autoComplete="current-password"
                            slotProps={{
                                input: {
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="переключить видимость пароля"
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }
                            }}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 1, py: 1.2, fontWeight: 600, textTransform: 'none', fontSize: '16px' }}
                        >
                            Войти
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </div>
    );
};