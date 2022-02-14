import {useState} from "react";
import { Paper, Grid, Card, Toolbar, Button, InputAdornment, IconButton, InputLabel, FormControl, OutlinedInput } from '@mui/material';
import {VisibilityOff, Visibility} from '@mui/icons-material'

function LoginForm() {

    const errorMessage = '';
    //const dispatch = useDispatch();

    const [values, setValues] = useState({
        username: '',
        password: '',
        showPassword: false
    });

    function onEnterPress(e) {
        const { username, password } = values;
        e.preventDefault();
        if(e.code === 'Enter' && username && password ) {
            console.log('legged in');
            setTimeout(() => {
                console.log('err');
            }, 3000);
        }
    }

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    function handleMouseDownPassword(e) {
        e.preventDefault();
    }


    function logIn(e) {
        const { username, password } = values;
        e.preventDefault();
        console.log('legged in');
        setTimeout(() => {
            console.log('err');
        }, 3000);
    }


    return <Grid className="login-grid">
        <Paper className="login-paper">
            <form className="login-form">
                <Card>
                    <Toolbar className="login-toolbar">
                        <div className="login-title">Log in as administrator</div>
                    </ Toolbar>
                    <div className="input-form-main-container">
                        <div className="login-textfield-cont">
                            <FormControl fullWidth className="login-textfield-control">
                                <InputLabel htmlFor="userName">Username</InputLabel>
                                <OutlinedInput className="input-textfield"
                                               type="text"
                                               value={values.username}
                                               label="Username"
                                               name="username"
                                               id="userName"
                                               onChange={handleChange}
                                               onKeyUp={onEnterPress}
                                />
                            </FormControl>
                        </div>
                        <div className="login-textfield-cont">
                            <FormControl fullWidth className="login-textfield-control">
                                <InputLabel htmlFor="userPass">Password</InputLabel>
                                <OutlinedInput className="input-textfield"
                                               type={values.showPassword ? 'text' : 'password'}
                                               id="userPass"
                                               name="password"
                                               label="Password"
                                               value={values.password}
                                               onChange={handleChange}
                                               onKeyUp={onEnterPress}
                                               endAdornment={
                                                   <InputAdornment position="end">
                                                       <IconButton
                                                           aria-label="toggle password visibility"
                                                           onClick={handleClickShowPassword}
                                                           onMouseDown={handleMouseDownPassword}
                                                           edge="end"
                                                       >
                                                           {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                                       </IconButton>
                                                   </InputAdornment>
                                               }
                                />
                            </FormControl>
                        </div>
                    </div>
                    {errorMessage && <div className="login-errorMessage">{errorMessage}</div>}
                    <div className="login-button-cont">
                        <Button className="login-button" variant="contained" id="myBtn"
                                disabled={!values.username || !values.password} onClick={logIn}>Login</Button>
                    </div>
                </Card>
            </form>
        </Paper>
    </Grid>

}


export default LoginForm;
