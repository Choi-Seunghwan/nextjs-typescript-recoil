import api from 'src/api/API';
import React, { useEffect, useRef, useState } from 'react';
import { BaseProps } from 'src/types/common';
import Button from '@components/atoms/button/Button';
import Table from '@components/atoms/table/Table';

type SellerTableProps = {
  dataSource?: any[];
  disabled?: boolean;
} & BaseProps;

const columns = [
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

const SellerTable: React.FC<SellerTableProps> = () => {
  const [sellers, setSellers] = useState([]);
  async function getSeller() {
    const result = await api.get('/admin/seller');
    // setSellers(result);
  }

  useEffect(() => {
    getSeller();
  });

  return <Table dataSource={sellers} columns={columns}></Table>;
};

export default SellerTable;
