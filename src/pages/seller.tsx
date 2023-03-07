import Input from '@components/atoms/input/Input';
import Select from '@components/atoms/select/Select';
import Title from '@components/atoms/title/Title';
import WithLayout from '@components/templates/withLayout';
import styles from '@styles/seller.module.scss';
import PeriodPicker from '@components/molecules/periodPicker/PeriodPicker';
import Button from '@components/atoms/button/Button';
import Table from '@components/atoms/table/table';

const Seller = () => {
  const serchKeywordOptions = [
    { label: '아이디', value: 'email' },
    { label: '닉네임', value: 'nickname' },
  ];

  const stateOptions = [
    { label: '전체', value: 'all' },
    { label: '공개', value: 'opened' },
    { label: '비공개', value: 'closed' },
  ];

  const tableColumns = [
    {
      title: 'No.',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: '아이디(이메일)',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '닉네임',
      dataIndex: 'nickname',
      key: 'nickname',
    },
    {
      title: '등록일',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: '최근 판매일',
      dataIndex: 'recentlySalesDate',
      key: 'recentlySalesDate',
    },
    {
      title: '최근 정산일',
      dataIndex: 'recentlySettlementDate',
      key: 'recentlySettlementDate',
    },
    {
      title: '가입일',
      dataIndex: 'userCreatedAt',
      key: 'userCreatedAt',
    },
    {
      title: '승인 여부',
      dataIndex: 'isApproved',
      key: 'isApproved',
    },
    {
      title: '상태',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: '',
      dataIndex: 'edit',
      key: 'edit',
      render: (id: string) => <Button clickHandler={itemDetailBtn(id)} text="상세보기"></Button>,
    },
  ];

  const itemDetailBtn = (id: string) => {
    // console.log("@#", id);
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
        <div className={styles['seller-table-wrap']}>
          <Table columns={tableColumns} />
        </div>
      </div>
    </div>
  );
};

export default WithLayout(Seller);
