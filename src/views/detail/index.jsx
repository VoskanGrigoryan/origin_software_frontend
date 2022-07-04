import React, { useEffect, useRef, useState } from "react";
import {
  Layout,
  Menu,
  Row,
  Col,
  Typography,
  Divider,
  Button,
  Radio,
  Space,
  Select,
  DatePicker,
  Tooltip,
} from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";

import { useSelector, useDispatch } from "react-redux";

import { getCotizationDetails } from "../../redux/detailSlice";

import "../../assets/styles/DetailsPage.css";
import ActionDetail from "../../components/charts/ActionDetail";

const { Header, Sider, Content } = Layout;
const { Option } = Select;
const { Title } = Typography;
const { RangePicker } = DatePicker;

const DetailsView = () => {
  const dispatch = useDispatch();
  const [radioValue, setRadioValue] = useState();
  const [collapsed, setCollapsed] = useState(false);
  const [timer, setTimer] = useState(false);
  const [detail, setDetail] = useState({
    isRealTimeSelected: false,
    isHistoricalSelected: false,
    option: 0,
    interval: "5min",
    date_from: null,
    date_to: null,
    symbol: null,
  });

  const timers = { "1min": 600000, "5min": 12000000, "15min": 1200000000000 };

  const username = JSON.parse(localStorage.getItem("user_name"));
  const action = JSON.parse(localStorage.getItem("action"));

  useEffect(() => {
    setDetail({ ...detail, symbol: action.symbol });
  }, []);

  const onChangeRadio = (e) => {
    if (e.target.value === 1) {
      setDetail({
        ...detail,
        option: 1,
        isRealTimeSelected: true,
        isHistoricalSelected: false,
      });
    } else if (e.target.value === 2) {
      setDetail({
        ...detail,
        option: 2,
        isRealTimeSelected: false,
        isHistoricalSelected: true,
      });
    }

    setRadioValue(e.target.value);
  };

  const intervalSelect = (e) => {
    setDetail({
      ...detail,
      interval: e,
    });
  };

  const dateSelected = (e) => {
    const dateFrom = e[0]._d;
    const dateTo = e[1]._d;

    const date = new Date(dateFrom),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);

    const finalDateFrom = [date.getFullYear(), mnth, day].join("-");

    const dateEnd = new Date(dateTo),
      mnthEnd = ("0" + (dateEnd.getMonth() + 1)).slice(-2),
      dayEnd = ("0" + dateEnd.getDate()).slice(-2);

    const finalDateTo = [dateEnd.getFullYear(), mnthEnd, dayEnd].join("-");

    setDetail({ ...detail, date_from: finalDateFrom, date_to: finalDateTo });
    // setDetail((state) => ({ ...state, date_from: finalDateFrom }));
    // setDetail({ ...detail, date_to: finalDateTo });
  };

  const getCotizationDetail = () => {
    setTimer(true);
    if (detail.option === 1) {
      const date = new Date();

      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      const finalDate = [date.getFullYear(), month, day].join("-");

      setDetail({ ...detail, date_to: finalDate, date_from: finalDate });

      dispatch(getCotizationDetails(detail));
    }
    if (detail.option === 2) {
      setDetail({ ...detail, interval: "5min" });
      dispatch(getCotizationDetails(detail));
    }
    if (detail.option === 0) {
      alert("Parameters have not been selected");
    }
    // dispatch(getCotizationDetails(data));
  };

  const intervalID = useRef(null);

  useEffect(() => {
    if (timer === true) {
      clearInterval(intervalID);
      intervalID.current = setInterval(
        getCotizationDetail,
        timers[detail.interval]
      );
    }

    return () => {
      clearInterval(intervalID);
    };
  }, [timer]);

  return (
    <Layout className="main">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[]}
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
              <Title level={5}>
                {action.symbol} - {action.name} - {action.currency}
              </Title>
            </Col>
            <Col>
              <Title level={5}>User: {username}</Title>
            </Col>
            <Divider style={{ marginTop: "5px" }} />
          </Row>
          <Row>
            <Col>
              <Radio.Group onChange={onChangeRadio} value={radioValue}>
                <Space direction="vertical">
                  <Row>
                    <Col span={5}>
                      <Radio value={1}>
                        {" "}
                        <Tooltip title="When selected the chart will be based on the current date along with the selected refresh interval">
                          Real time
                        </Tooltip>{" "}
                      </Radio>
                    </Col>
                    <Col span={16}>
                      <Select
                        disabled={!detail.isRealTimeSelected}
                        defaultValue="5min"
                        value={detail.interval}
                        style={{
                          width: 120,
                        }}
                        onChange={intervalSelect}
                      >
                        <Option value="1min">1 minute</Option>
                        <Option value="5min">5 minutes</Option>
                        <Option value="15min">15 minutes</Option>
                      </Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={5}>
                      <Radio value={2}>
                        {" "}
                        <Tooltip title="When selected the chart will be based on the selected dates as well as the selected refresh interval">
                          Historical
                        </Tooltip>
                      </Radio>
                    </Col>
                    <Col span={14}>
                      <RangePicker
                        onChange={dateSelected}
                        disabled={!detail.isHistoricalSelected}
                      />
                    </Col>
                    <Col span={3} className="graphButton">
                      <Button type="primary" onClick={getCotizationDetail}>
                        Graph
                      </Button>
                    </Col>
                  </Row>
                </Space>
              </Radio.Group>
            </Col>
          </Row>
          <div className="chart">
            <ActionDetail />
            {/* <HighchartsReact highcharts={Highcharts} options={chartOptions} />
            <h3>Hovering over {hoverData}</h3> */}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DetailsView;
