import styles from "./title.module.scss";

type TitleProps = {
  text?: string;
  subText?: string;
};

const Title: React.FC<TitleProps> = ({ text, subText }) => {
  return (
    <div className={styles["title"]}>
      <p className={styles["title-text"]}>{text}</p>
      <h4 className={styles["title-sub-text"]}>{subText}</h4>
      <hr />
    </div>
  );
};

export default Title;
