import Input from '@components/atoms/input/Input';
import styles from './login-container.module.scss';
import { BaseProps } from 'src/types/common';
import React, { useState } from 'react';
import InputPassword from '@components/atoms/input/InputPassword';
import Button from '@components/atoms/button/Button';
import { signIn } from 'src/api/auth';
import { useRecoilState } from 'recoil';
import { authState } from 'src/store/auth.state';
import { useAuth } from 'src/hooks/auth.hook';
import { useRouter } from 'next/router';

type LoginContainerProps = {} & BaseProps;

const LoginContainer: React.FC<LoginContainerProps> = ({}) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useAuth();
  const router = useRouter();

  const confirmBtnHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!id || !password) return;

    const result = await signIn(id, password);

    if (!result) return;

    const { nickname, email, jwt } = result;
    const user = { nickname, email };
    setAuth({ user, token: jwt });

    router.push('/');
  };

  return (
    <div className={styles['login-container']}>
      <div className={styles['input-wrap']}>
        <div>
          <p>아이디(이메일)</p>
          <Input value={id} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setId(e?.target?.value)} />
        </div>
        <div>
          <p>비밀번호</p>
          <InputPassword
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e?.target?.value)}
          />
        </div>
      </div>
      <div className={styles['btn-wrap']}>
        <Button onClick={confirmBtnHandler} text="확인" />
      </div>
    </div>
  );
};

export default LoginContainer;
