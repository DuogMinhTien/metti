import React, { useState, useEffect } from "react";
import { Col, Dropdown, Row, Menu } from "antd";

function UtilityComponent(props) {
  const { changeLanguage, current_lang } = props;

  const [currentLangTitle, setCurrentLangTitle] = useState("VI");

  useEffect(() => {
    switch (current_lang) {
      case "vi":
        setCurrentLangTitle("../../assets/vietnam.png");
        break;
      case "en":
        setCurrentLangTitle("../../assets/united-states.png");
        break;
      default:
        break;
    }
  }, [current_lang]);

  const menu = (
    <Menu>
      <Menu.Item onClick={() => changeLanguage("vi")}>
        <p>
          <img src={"../../assets/vietnam.png"} alt="" />
        </p>
      </Menu.Item>
      <Menu.Item onClick={() => changeLanguage("en")}>
        <p>
          <img src={"../../assets/united-states.png"} alt="" />
        </p>
      </Menu.Item>
    </Menu>
  );

  return (
    <Row id="utility-wrapper" gutter={16}>
      <Col md={24} className="utility-wrapper-select">
        <Dropdown overlay={menu}>
          <p>
            <img src={currentLangTitle} alt="" />
          </p>
        </Dropdown>
      </Col>
    </Row>
  );
}

export default UtilityComponent;
