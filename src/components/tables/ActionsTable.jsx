import React, { useState } from "react";
import { Table, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { removeUserAction } from "../../redux/userActionsSlice";
const { Column } = Table;

const ActionsTable = (props) => {
  const dispatch = useDispatch();

  const removeRow = (record) => {
    console.log(record.symbol);
    dispatch(removeUserAction({ symbol: record.symbol }));
  };

  return (
    <Table dataSource={props.actions} className="actionsTable" bordered>
      <Column title="Symbol" dataIndex="symbol" />
      <Column title="Name" dataIndex="name" />
      <Column title="Currency" dataIndex="currency" />
      <Column
        dataIndex="action"
        width={50}
        align="center"
        title="Action"
        render={(_, record) => (
          <Button
            type="primary"
            onClick={() => {
              // console.log(record);
              // setRowState(record);
              removeRow(record);
            }}
          >
            Delete
          </Button>
        )}
      />
    </Table>

    // Old table build, keeping it just in case

    // <Table
    //   columns={columns}
    //   rowKey={data.id}
    //   dataSource={data.actions}
    //   className="actionsTable"
    //   bordered
    // />
  );
};

export default ActionsTable;
