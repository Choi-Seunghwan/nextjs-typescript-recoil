import { BaseProps } from 'src/types/common';
import styles from './seller-editor.module.scss';
import Input from '@components/atoms/input/Input';
import Button from '@components/atoms/button/Button';
import Select from '@components/atoms/select/Select';

type SellerEditorProps = {
  seller?: {};
} & BaseProps;

const SellerEditor: React.FC<SellerEditorProps> = ({}) => {
  return (
    <div className={styles['seller-editor']}>
      <div className={styles['seller-editor-inner']}>
        <div className={[styles['item'], styles['email']].join(' ')}>
          <p>아이디(이메일)</p>
          <Input placeholder="아이디(이메일)" className={styles['input']} />
          <Button text="조회" />
        </div>
        <div className={[styles['item'], styles['nickname']].join(' ')}>
          <p>닉네임</p>
          <span>-</span>
        </div>
        <div className={[styles['item'], styles['designer-name']].join(' ')}>
          <p>디자이너마켓명</p>
          <Input placeholder="아이디(이메일)" className={styles['input']} />
        </div>
        <div className={[styles['item'], styles['market-image']].join(' ')}>
          <p>마켓 이미지</p>
          <div className={styles['market-image-item']}>
            <p>홈섹션 마켓 이미지</p>
          </div>
          <div className={styles['market-image-item']}>
            <p>홈섹션 마켓 이미지</p>
          </div>
          <div className={styles['market-image-item']}>
            <p>홈섹션 마켓 이미지</p>
          </div>
        </div>
        <div className={[styles['item'], styles['account']].join(' ')}>
          <p>계좌번호</p>
          <Input placeholder="계좌번호" className={styles['input']} />
        </div>
        <div className={[styles['item'], styles['account-bank']].join(' ')}>
          <p>계좌번호</p>
          <Select />
        </div>
        <div className={[styles['item'], styles['account-name']].join(' ')}>
          <p>예금주명</p>
          <Input placeholder="예금주명" className={styles['input']} />
        </div>
        <div className={[styles['item'], styles['account-image']].join(' ')}></div>
      </div>
    </div>
  );
};

export default SellerEditor;
