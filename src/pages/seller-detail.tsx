import Title from '@components/atoms/title/Title';
import WithLayout from '@components/templates/withLayout';
import styles from '@styles/seller-detail.module.scss';
import { useAuthCheck } from 'src/hooks/useAuthCheck';

const SellerDetail = () => {
  useAuthCheck();

  return (
    <div className={styles['seller-detail']}>
      <Title text="판매자 정보 상세" subText="판매 정보 관리 >" />
      <div className={styles['seller-detail-content']}>
        <div className={styles['seller-info']}>
          <div className={styles['seller-info-inner-left']}>
            <div>
              <p>아이디(이메일)</p>
              <span>id</span>
            </div>

            <div>
              <p>닉네임</p>
              <span>nickname</span>
            </div>

            <div>
              <p>디자이너마켓명</p>
              <span>designername</span>
            </div>
          </div>
          <div className={styles['seller-info-inner-right']}>
            <div>
              <p>판매자 승인(등록) 시간</p>
              <span>date</span>
            </div>

            <div>
              <p>최근 정보 변경 시간</p>
              <span>date</span>
            </div>

            <div>
              <p>최근 페이스 판매 시간</p>
              <span>date</span>
            </div>

            <div>
              <p>최근 정산일</p>
              <span>date</span>
            </div>
          </div>
          <div>
            <p>공개여부</p>
          </div>
        </div>
        <div className={styles['market-info']}></div>
        <div className={styles['account-info']}></div>
        <div className={styles['button-wrap']}></div>
      </div>
    </div>
  );
};

export default WithLayout(SellerDetail);
