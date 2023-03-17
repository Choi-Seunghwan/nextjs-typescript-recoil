import Title from '@components/atoms/title/Title';
import LoginContainer from '@components/organisms/loginContainer/LoginContainer';
import WithLayout from '@components/templates/withLayout';
import styles from '@styles/login.module.scss';

const Login = () => (
  <div className={styles['login']}>
    <Title text="로그인" />
    <section className={styles['login-content']}>
      <LoginContainer />
    </section>
  </div>
);

export default WithLayout(Login, { menuDisabled: true });
