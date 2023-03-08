import styles from './title.module.scss';

type TitleProps = {
  text?: string;
  subText?: string;
};

const Title: React.FC<TitleProps> = ({ text, subText }) => {
  return (
    <div className={styles['title']}>
      <h4 className={styles['title-sub-text']}>{subText}</h4>
      <h3 className={styles['title-text']}>{text}</h3>
      <hr className={styles['title-divider']} />
    </div>
  );
};

export default Title;
