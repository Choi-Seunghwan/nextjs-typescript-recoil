import { BaseProps } from 'src/types/common';
import styles from './seller-editor.module.scss';
import Input from '@components/atoms/input/Input';
import Button from '@components/atoms/button/Button';
import Select from '@components/atoms/select/Select';
import Upload from '@components/atoms/upload/Upload';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { UploadFile, UploadProps } from 'antd';
import { createSeller, sellerEmailSearch } from 'src/api/seller';
import { BANK_LIST } from 'src/constants/seller';
import { uploadComponentImageToBase64 } from '@utils/file';
import { AccountInfo } from 'src/types/seller';

type SellerEditorProps = {
  seller?: {};
} & BaseProps;

const SellerEditor: React.FC<SellerEditorProps> = forwardRef(({}, ref) => {
  useImperativeHandle(ref, () => ({
    register,
  }));
  const [info, setInfo] = useState({
    email: '',
    nickname: '',
    marketName: '',
    marketDescription: '',
    account: '',
    bank: '',
    accountHolderName: '',
  });

  const bankList = BANK_LIST.map(v => ({ value: v, label: v }));

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const [homeMarketImg, setHomeMarketImg] = useState<UploadFile[]>([]);
  const [MarketDetailImg, setMarketDetailImg] = useState<UploadFile[]>([]);
  const [homeMarketListImg, setHomeMarketListImg] = useState<UploadFile[]>([]);
  const [accountImg, setAccountImg] = useState<UploadFile[]>([]);
  const [hasEmailInputError, setHasEmailInputError] = useState(false);

  const hasError = () => {
    return hasEmailInputError;
  };

  const onMarketImgChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setHomeMarketImg(newFileList);
  };

  const onMarketDetailImgChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setMarketDetailImg(newFileList);
  };

  const onMarketListImgChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setHomeMarketListImg(newFileList);
  };

  const onAccountImgChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setAccountImg(newFileList);
  };

  const onBankChange = (v: string) => {
    setInfo(prevState => ({ ...prevState, bank: v }));
  };

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      // file.preview = await getBase64(file.originFileObj as RcFile);
    }
  };

  const emailSearchBtnHandler = async () => {
    const result = await sellerEmailSearch(info.email);
    setInfo(prevState => ({ ...prevState, nickname: result.nickname }));
  };

  const register = async () => {
    // const formatFile = await uploadComponentImageToBase64(homeMarketImg[0].originFileObj as RcFile);
    // console.log(formatFile);

    const { email, nickname, marketName, marketDescription, account, bank, accountHolderName } = info;
    const accountInfo: AccountInfo = { account, bank, holderName: accountHolderName };

    const result = await createSeller(email, marketName, accountInfo);
  };

  return (
    <div className={styles['seller-editor']}>
      <div className={styles['seller-editor-inner']}>
        <div className={[styles['item'], styles['email']].join(' ')}>
          <p>아이디(이메일)</p>
          <Input
            placeholder="아이디(이메일)"
            className={styles['input']}
            onChange={onInputChange}
            value={info.email}
            name="email"
          />
          <Button text="조회" onClick={emailSearchBtnHandler} />
        </div>
        <div className={[styles['item'], styles['nickname']].join(' ')}>
          <p>닉네임</p>
          <span>{info.nickname ? info.nickname : '-'}</span>
        </div>
        <div className={[styles['item'], styles['designer-name']].join(' ')}>
          <p>디자이너마켓명</p>
          <Input
            value={info.marketName}
            onChange={onInputChange}
            placeholder="마켓명"
            name="marketName"
            className={styles['input']}
          />
        </div>
        <div className={[styles['item'], styles['market-images']].join(' ')}>
          <p className={styles['market-img-title']}>마켓 이미지</p>
          <div className={styles['market-image-item']}>
            <p className={styles['image-title']}>홈섹션 마켓 이미지</p>
            <Upload fileList={homeMarketImg} onChange={onMarketImgChange} onPreview={handlePreview}></Upload>
            <p style={{ marginTop: '30px' }}>홈섹션 마켓 서브텍스트</p>
            <Input
              value={info.marketDescription}
              onChange={onInputChange}
              placeholder="서브 텍스트"
              name="marketDescription"
            />
          </div>
          <div className={styles['market-image-item']}>
            <p className={styles['image-title']}>마켓 상세 이미지</p>
            <Upload fileList={MarketDetailImg} onChange={onMarketDetailImgChange} onPreview={handlePreview}></Upload>
          </div>
          <div className={styles['market-image-item']}>
            <p className={styles['image-title']}>마켓 리스트 이미지</p>
            <Upload fileList={homeMarketListImg} onChange={onMarketListImgChange} onPreview={handlePreview}></Upload>
          </div>
        </div>
        <div className={[styles['item'], styles['account']].join(' ')}>
          <p>계좌번호</p>
          <Input
            value={info.account}
            onChange={onInputChange}
            placeholder="계좌번호"
            className={styles['input']}
            name="account"
          />
        </div>
        <div className={[styles['item'], styles['account-bank']].join(' ')}>
          <p>은행명</p>
          <Select options={bankList} onChange={onBankChange} style={{ width: '150px' }} />
        </div>
        <div className={[styles['item'], styles['account-name']].join(' ')}>
          <p>예금주명</p>
          <Input
            value={info.accountHolderName}
            onChange={onInputChange}
            placeholder="예금주명"
            className={styles['input']}
            name="accountHolderName"
          />
        </div>
        <div className={[styles['item'], styles['account-image']].join(' ')}>
          <p>통장사본 이미지</p>
          <Upload fileList={accountImg} onChange={onAccountImgChange}></Upload>
        </div>
      </div>
    </div>
  );
});

SellerEditor.displayName = 'SellerEditor';
export default SellerEditor;
