import Dropdown from "@components/atoms/dropdown/Dropdown";
import Input from "@components/atoms/input/Input";
import Title from "@components/atoms/title/Title";
import WithLayout from "@components/templates/withLayout";
import styles from "@styles/seller.module.scss";

const Seller = () => {
  const searchKeywordItems = [""];

  return (
    <div className={styles["seller"]}>
      <Title text="판매자 정보 관리" />
      <div className={styles["seller-content"]}>
        <div className={styles["seller-table-info"]}>
          <div className={styles["search-keyword"]}>
            <span className={styles["field-text"]}>검색어</span>
            <Dropdown />
            <Input />
          </div>
          <div></div>
        </div>
        <div className={styles["seller-table-wrap"]}></div>
      </div>
    </div>
  );
};

export default WithLayout(Seller);
