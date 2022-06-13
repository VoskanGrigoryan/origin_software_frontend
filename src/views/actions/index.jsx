import React, { useState, useEffect } from "react";
import "../../assets/styles/ActionsPage.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  Row,
  Col,
  Typography,
  Divider,
  AutoComplete,
  Button,
} from "antd";
import ActionsTable from "../../components/tables/ActionsTable";
import { useSelector, useDispatch } from "react-redux";
import { getActions } from "../../redux/actionsSlice";
import { getUserActions, addUserAction } from "../../redux/userActionsSlice";
// import { Navigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const MyActions = () => {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);

  //states that affect the search input
  const [searchInput, setSearchInput] = useState();
  const [searchValue, setSearchValue] = useState();

  //Gets all the actions from database
  const actions = useSelector((state) => state.actions);
  //Gets all the actions associated to user from database
  const userActions = useSelector((state) => state.userActions);

  const username = JSON.parse(localStorage.getItem("user_name"));

  //Runs the dispatch actions for both all actions as well as user actions
  useEffect(() => {
    dispatch(getActions());
    dispatch(getUserActions({ user_id: 1 }));
  }, [dispatch]);

  //Does nothing
  // const onSelect = (e) => {
  //   setSearchValue(e);
  // };

  //Filters all actions with the actions already added to the user to display only those that havent been added yet.
  const options = () => {
    const filteredData = actions.filter((elem) => {
      return !userActions.find((element) => element.symbol === elem.symbol);
    });

    setSearchInput(filteredData);
  };

  useEffect(() => {
    options();
  }, [actions, userActions]);

  //Ant Design requires array of strings for the options of the input.
  let result = searchInput?.map((obj, index) => ({
    value: obj.symbol,
    key: index,
  }));

  //Runs the dispatch for adding a new action to the user
  const addAction = () => {
    const obj = {
      symbol: searchValue,
    };
    dispatch(addUserAction(obj));
  };

  return (
    <Layout className="main">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              // onClick: () => {
              //   <Navigate to="/actions" />;
              // },
              key: "1",
              icon: <DollarCircleOutlined />,
              label: "My actions",
            },
            {
              onClick: () => {
                localStorage.removeItem("user_name");
                localStorage.removeItem("user");
                window.location.reload();
              },
              key: "2",
              icon: <LogoutOutlined />,
              label: "Logout",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Row className="headerPage">
            <Col>
              <Title level={3}>My Actions</Title>
            </Col>
            <Col>
              <Title level={5}>User: {username}</Title>
            </Col>
            <Divider style={{ marginTop: "5px" }} />
          </Row>
          <Row>
            <Col>
              <AutoComplete
                style={{
                  width: 300,
                }}
                options={result}
                placeholder="Search"
                filterOption={(inputValue, option) =>
                  option.value
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                }
                // onSelect={onSelect}
              />
            </Col>
            <Col className="addButton">
              <Button type="primary" onClick={addAction}>
                Add
              </Button>
            </Col>
          </Row>
          <Row>
            <ActionsTable
              actions={userActions}
              style={{
                backgroundColor: "red",
                width: "1200px",
                minWidth: "1200px",
              }}
            />
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MyActions;
