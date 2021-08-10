import React from 'react';
import { useHistory } from 'react-router-dom';
import { LoginBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components/atoms';

const Login = () => {
  const history = useHistory();

  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" alt="imageBg" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={50} />
        <Button title="Login" />
        <Gap height={100} />
        <Link
          title="Belum punya akun? silahkan daftar"
          onClick={() => history.push('/register')}
        />
      </div>
    </div>
  );
};

export default Login;
