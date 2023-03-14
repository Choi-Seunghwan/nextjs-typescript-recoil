import Input from '@components/atoms/input/Input';
import styles from './login-container.module.scss';
import { BaseProps } from 'src/types/common';
import { useState } from 'react';
import InputPassword from '@components/atoms/input/InputPassword';

type LoginContainerProps = {} & BaseProps;

const LoginContainer: React.FC<LoginContainerProps> = ({}) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles['login-container']}>
      <div>
        <p>아이디(이메일)</p>
        <Input value={id} />
      </div>
      <div>
        <p>비밀번호</p>
        <InputPassword value={password} />
      </div>
    </div>
  );
};

export default LoginContainer;
