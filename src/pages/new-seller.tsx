import Button from '@components/atoms/button/Button';
import Title from '@components/atoms/title/Title';
import SellerEditor from '@components/organisms/sellerEditor/SellerEditor';
import WithLayout from '@components/templates/withLayout';
import styles from '@styles/new-seller.module.scss';

const NewSeller = () => {
  return (
    <div className={styles['new-seller']}>
      <Title text="판매자 정보 등록" subText="판매 정보 관리 >" />
      <div className={styles['new-seller-content']}>
        <div className={styles['editor-wrap']}>
          <SellerEditor />
        </div>
        <div className={styles['button-wrap']}>
          <Button text="판매자 등록" />
          <Button text="취소" />
        </div>
      </div>
    </div>
  );
};

export default WithLayout(NewSeller);
