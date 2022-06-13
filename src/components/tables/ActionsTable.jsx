import React, { useState } from "react";
import { Table, Button } from "antd";
import { useDispatch } from "react-redux";
import { removeUserAction } from "../../redux/userActionsSlice";
const { Column } = Table;

//Used for old table build, needed column array, on current build its not neccesary.
// const columns = [
//   {
//     title: "Symbol",
//     dataIndex: "symbol",
//     key: "symbol",
//   },
//   {
//     title: "Name",
//     dataIndex: "name",
//     key: "name",
//   },
//   {
//     title: "Currency",
//     dataIndex: "currency",
//     key: "currency",
//   },
//   {
//     title: "Action",
//     key: "action",
//     width: " 150px",
//     align: "center",
//     render: (text, record, index) => (
//       <Space size="middle">
//         <Button
//           type="primary"
//           onClick={(e) => {
//             console.log(e.target.value);
//           }}
//         >
//           Delete
//         </Button>
//       </Space>
//     ),
//   },
// ];

const ActionsTable = (data) => {
  const dispatch = useDispatch();
  const [rowState, setRowState] = useState();

  const removeRow = () => {
    dispatch(removeUserAction({ symbol: rowState.symbol }));
  };

  return (
    <Table dataSource={data.actions} className="actionsTable" bordered>
      <Column title="Symbol" dataIndex="symbol" key={data.actions.id} />
      <Column title="Name" dataIndex="name" key={data.actions.id} />
      <Column title="Currency" dataIndex="currency" key={data.actions.id} />
      <Column
        width={50}
        align="center"
        title="Action"
        key={data.actions.id}
        render={(_, record) => (
          <Button
            type="primary"
            onClick={() => {
              setRowState(record);
              removeRow();
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
