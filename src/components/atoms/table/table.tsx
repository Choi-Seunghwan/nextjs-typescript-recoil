import React from 'react';
import { Table as _Table } from 'antd';
import { BaseProps } from 'src/types/common';

type TableProps = {
  dataSource?: any[];
  columns?: any[];
  disabled?: boolean;
} & BaseProps;

const Table: React.FC<TableProps> = props => {
  return <_Table {...props} className="table"></_Table>;
};

export default Table;
