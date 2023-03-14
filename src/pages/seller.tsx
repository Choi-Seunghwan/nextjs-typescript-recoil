import Input from '@components/atoms/input/Input';
import Select from '@components/atoms/select/Select';
import Title from '@components/atoms/title/Title';
import WithLayout from '@components/templates/withLayout';
import styles from '@styles/seller.module.scss';
import PeriodPicker from '@components/molecules/periodPicker/PeriodPicker';
import Button from '@components/atoms/button/Button';
import SellerTable from '@components/organisms/sellerTable/SellerTable';
import { useRouter } from 'next/router';

const Seller = () => {
  const router = useRouter();

  const serchKeywordOptions = [
    { label: '아이디', value: 'email' },
    { label: '닉네임', value: 'nickname' },
  ];

  const stateOptions = [
    { label: '전체', value: 'all' },
    { label: '공개', value: 'opened' },
    { label: '비공개', value: 'closed' },
  ];

  const goNewSellerBtnHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/new-seller');
  };

  return (
    <div className={styles['seller']}>
      <Title text="판매자 정보 관리" />
      <div className={styles['seller-content']}>
        <div className={styles['seller-table-info']}>
          <div className={styles['seller-table-info-top']}>
            <span style={{ paddingRight: '26px' }} className={styles['field-text']}>
              검색어
            </span>
            <Select defaultValue={'email'} style={{ width: '95px' }} options={serchKeywordOptions} />
            <Input style={{ width: '220px' }} />
            <span className={styles['field-text']}>상태</span>
            <Select defaultValue={'all'} style={{ width: '95px' }} options={stateOptions} />
          </div>
          <div className={styles['seller-table-info-bottom']}>
            <span className={styles['field-text']}>등록 기간</span>
            <PeriodPicker>
              <span>~</span>
            </PeriodPicker>
            <div>
              <Button text="오늘" />
              <Button text="3일" />
              <Button text="7일" />
              <Button text="1개월" />
              <Button text="3개월" />
              <Button text="전체" />
            </div>
            <Button text="검색" />
          </div>
        </div>
        <div>
          <Button text="판매자 등록" onClick={goNewSellerBtnHandler} />
        </div>
        <div className={styles['seller-table-wrap']}>
          <SellerTable />
        </div>
      </div>
    </div>
  );
};

export default WithLayout(Seller);
