import Logo from "../../assets/images/Logo.jpg";
import "./Footer.scss";
import { Col, Row } from "antd";
const Footer: React.FC = () => {
  return (
    <div>
      <div className="container">
        <Row className="footer-top" justify="space-between">
          <Col className="footer-top-left" span={12}>
            <a href="Logo VieON">
              <img src={Logo} alt="" />
            </a>
          </Col>
          <Col className="footer-top-right" span={12}>
            <ul>
              <li className="title">Quy Định</li>
              <li>
                <a href="">Điều khoản sử dụng</a>
              </li>
              <li>
                <a href="">Chính sách và quy định chung</a>
              </li>
              <li>
                <a href="">Chính sách về quyền riêng tư </a>
              </li>
              <li>
                <a href="">Chính sách về sở hữu trí tuệ</a>
              </li>
            </ul>
            <ul>
              <li className="title">Trợ giúp</li>
              <li>
                <a href="">Trung tâm hỗ trợ</a>{" "}
              </li>
              <li>
                <a href="">FAQs</a>
              </li>
              <li>
                <a href="">Liên Hệ</a>
              </li>
              <li>
                <a href="">Góp ý</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col className="footer-bottom-left" span={12}>
            Location
          </Col>
          <Col className="footer-bottom-left" span={12}>
            QR
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
