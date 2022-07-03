import React from "react";
import { Table, Button } from "antd";
import { useDispatch } from "react-redux";
import { removeUserAction } from "../../redux/userActionsSlice";
import { green } from "@ant-design/colors";

const { Column } = Table;

const ActionsTable = (props) => {
  const dispatch = useDispatch();

  const removeRow = (record) => {
    console.log(record.symbol);
    dispatch(removeUserAction({ symbol: record.symbol }));
  };

  return (
    <Table
      dataSource={props.actions}
      size="small"
      className="actionsTable"
      bordered
      rowKey="id"
      pagination={{
        pageSize: 10,
      }}
      scroll={{
        y: 280,
        x: "max-content",
      }}
    >
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
            danger
            onClick={() => {
              console.log(record);
              // setRowState(record);
              removeRow(record);
            }}
          >
            Delete
          </Button>
        )}
      />
      <Column
        dataIndex="action"
        width={50}
        align="center"
        title="Action"
        render={(_, record) => (
          <Button
            type="primary"
            onClick={() => {
              console.log(record);
              // setRowState(record);
              removeRow(record);
            }}
          >
            More
          </Button>
        )}
      />
    </Table>
  );
};

export default ActionsTable;
