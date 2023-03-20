import Title from '@components/atoms/title/Title';
import WithLayout from '@components/templates/withLayout';
import { useAuthCheck } from 'src/hooks/useAuthCheck';

const Market = () => {
  useAuthCheck();

  return (
    <div>
      <Title text="디자이너 마켓 관리" />
    </div>
  );
};

export default WithLayout(Market);
