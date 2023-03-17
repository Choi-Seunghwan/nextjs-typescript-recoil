import Input from '@components/atoms/input/Input';
import styles from './login-container.module.scss';
import { BaseProps } from 'src/types/common';
import { useState } from 'react';
import InputPassword from '@components/atoms/input/InputPassword';
import Button from '@components/atoms/button/Button';

type LoginContainerProps = {} & BaseProps;

const LoginContainer: React.FC<LoginContainerProps> = ({}) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const confirmBtnHandler = () => {};

  return (
    <div className={styles['login-container']}>
      <div className={styles['input-wrap']}>
        <div>
          <p>아이디(이메일)</p>
          <Input value={id} onChange={e => setId(e?.target?.value)} />
        </div>
        <div>
          <p>비밀번호</p>
          <InputPassword value={password} onChange={e => setPassword(e?.target?.value)} />
        </div>
      </div>
      <div className={styles['btn-wrap']}>
        <Button onClick={confirmBtnHandler} text="확인" />
      </div>
    </div>
  );
};

export default LoginContainer;
