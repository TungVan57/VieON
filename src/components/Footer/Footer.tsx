import "./Footer.scss";
import { Col, Row } from "antd";
const Footer: React.FC = () => {
  return (
    <footer>
      <Row className="footer-top border-top" justify="space-between">
        <Col className="footer-top-left" span={12}>
          <a className="" title="VieON - Không Thể Rời Mắt">
            <svg
              className="size-h-full"
              xmlns="http://www.w3.org/2000/svg"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 149.54 45.94"
            >
              <defs>
                <radialGradient
                  id="radial-gradient"
                  cx="82.7"
                  cy="23.02"
                  fx="71.9111386742802"
                  r="13.17"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#8cff00"></stop>
                  <stop offset="0.16" stop-color="#7ffb02"></stop>
                  <stop offset="0.44" stop-color="#5cef09"></stop>
                  <stop offset="0.83" stop-color="#25dd13"></stop>
                  <stop offset="1" stop-color="#0ad418"></stop>
                </radialGradient>
                <linearGradient
                  id="linear-gradient"
                  x1="82.58"
                  y1="10.83"
                  x2="82.58"
                  y2="22.65"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fff"></stop>
                  <stop
                    offset="0.17"
                    stop-color="#fff"
                    stop-opacity="0.8"
                  ></stop>
                  <stop
                    offset="0.47"
                    stop-color="#fff"
                    stop-opacity="0.46"
                  ></stop>
                  <stop
                    offset="0.72"
                    stop-color="#fff"
                    stop-opacity="0.21"
                  ></stop>
                  <stop
                    offset="0.91"
                    stop-color="#fff"
                    stop-opacity="0.06"
                  ></stop>
                  <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                </linearGradient>
                <filter id="f1">
                  <feGaussianBlur
                    result="blurOut"
                    stdDeviation="1"
                  ></feGaussianBlur>
                </filter>
              </defs>
              <g className="cls-1">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      className="cls-2"
                      d="M76.08,1.23A22.15,22.15,0,0,0,61.89,15.15a24.78,24.78,0,0,0-1.31,8,21.78,21.78,0,0,0,6,15.25l.27.29.12.13.08.08a23.62,23.62,0,0,0,24.48,5.83,21,21,0,0,0,3.8-1.63,21.14,21.14,0,0,0,10.47-12.23A24,24,0,0,0,107,23.34C107.28,8,92.34-4,76.08,1.23Z"
                      filter="url(#f1)"
                      shape-rendering="geometricPrecision"
                    ></path>
                    <path
                      className="cls-2"
                      d="M143.62,4.05l-.14,36.53c0,4,2.14,1.34,2.71-.06a48.74,48.74,0,0,0,3.35-17.89,51.88,51.88,0,0,0-3-18.5C146,2.72,143.64-.78,143.62,4.05Z"
                      shape-rendering="geometricPrecision"
                    ></path>
                    <path
                      className="cls-2"
                      d="M113.68,36.63c0,5.69-8.46,6-8.46,6h21.19c1.54,0,3.79.08,4.5-.26,1.24-.6,1.25-1.57.65-2.29l-17.8-21.63c0,4.12-.05,10.06-.06,13.56C113.7,32.6,113.68,33.24,113.68,36.63Z"
                      shape-rendering="geometricPrecision"
                    ></path>
                    <path
                      className="cls-2"
                      d="M107.44,1.58a11.64,11.64,0,0,1,8.41,4.17c.91,1.12,15.69,19,15.69,19a1.29,1.29,0,0,0,2.28-.82l.08-18.9a3.08,3.08,0,0,0-2.46-3,19.92,19.92,0,0,0-4-.46Z"
                      shape-rendering="geometricPrecision"
                    ></path>
                    <path
                      className="cls-3"
                      d="M76.08,1.23A22.15,22.15,0,0,0,61.89,15.15a24.78,24.78,0,0,0-1.31,8,21.78,21.78,0,0,0,6,15.25l.27.29.12.13.08.08a23.62,23.62,0,0,0,24.48,5.83,21,21,0,0,0,3.8-1.63,21.14,21.14,0,0,0,10.47-12.23A24,24,0,0,0,107,23.34C107.28,8,92.34-4,76.08,1.23ZM89.85,43.7a23.55,23.55,0,0,1-7.47,1.16,21.36,21.36,0,0,1-14.79-6.39A21.71,21.71,0,0,1,62.54,15.9,20.67,20.67,0,0,1,75.73,2.81a23.65,23.65,0,0,1,7.15-1.16A21.36,21.36,0,0,1,98,8,21.74,21.74,0,0,1,103,30.62,20.68,20.68,0,0,1,89.85,43.7Z"
                      shape-rendering="geometricPrecision"
                    ></path>
                    <path
                      className="cls-2"
                      d="M55.48,30.08l0-3.69c0-3.65-.73-6.45-2.22-8.31a7.88,7.88,0,0,0-6.46-2.9,7.21,7.21,0,0,0-6.19,3c-1.48,2-2.21,4.76-2.22,8.41l0,5.5c0,3.37.69,6,2.1,7.77a7.68,7.68,0,0,0,6.34,2.78,7.93,7.93,0,0,0,5.93-2.18,10.25,10.25,0,0,0,2.52-6.43l0-.18-4.46,0,0,.15a6.85,6.85,0,0,1-1.16,3.37,3,3,0,0,1-2.52,1.07,3,3,0,0,1-2.84-1.6,11.15,11.15,0,0,1-.91-5.31V30Zm-4.8-5.27v1.51l-7.26,0v-.73a9.11,9.11,0,0,1,1-4.76,3.09,3.09,0,0,1,2.86-1.4,2.86,2.86,0,0,1,2.55,1.43A7.06,7.06,0,0,1,50.68,24.81Z"
                      shape-rendering="geometricPrecision"
                    ></path>
                    <path
                      className="cls-2"
                      d="M27.05,5.32a1.11,1.11,0,0,0,1.11-1.1V2.33a1.1,1.1,0,0,0-1.1-1.11l-9.19,0a1.11,1.11,0,0,0-1.11,1.1V4.17a1.11,1.11,0,0,0,1.1,1.11H19.5A.59.59,0,0,1,20,5.5a.57.57,0,0,1,.09.5L14.15,31.73a1.23,1.23,0,0,1,0,.16,1.23,1.23,0,0,1,0-.16L8.42,6a.62.62,0,0,1,.1-.51A.58.58,0,0,1,9,5.25h1.71a1.1,1.1,0,0,0,1.11-1.1V2.26a1.11,1.11,0,0,0-1.1-1.11l-9.61,0A1.11,1.11,0,0,0,0,2.21V4.1A1.11,1.11,0,0,0,1.1,5.21h.7A1.1,1.1,0,0,1,2.8,6L10,34.86l2,7.81h4L24.81,6.1a1.1,1.1,0,0,1,1-.79Z"
                      shape-rendering="geometricPrecision"
                    ></path>
                    <rect
                      className="cls-2"
                      x="28.28"
                      y="6.92"
                      width="4.1"
                      height="4.77"
                      rx="1.11"
                      transform="translate(20.9 39.59) rotate(-89.77)"
                      shape-rendering="geometricPrecision"
                    ></rect>
                    <path
                      className="cls-2"
                      d="M34.41,38.74h-.87a.78.78,0,0,1-.77-.78l.09-20.68a1.12,1.12,0,0,0-1.11-1.11l-5.48,0a1.11,1.11,0,0,0-1.11,1.1V19a1.1,1.1,0,0,0,1.1,1.11h.87a.77.77,0,0,1,.77.77l-.07,17.09a.77.77,0,0,1-.78.77s-2,.49-2,1.1v2.86H35.5V39.85A1.11,1.11,0,0,0,34.41,38.74Z"
                      shape-rendering="geometricPrecision"
                    ></path>
                    <path
                      className="cls-4"
                      d="M95.39,23A12.82,12.82,0,1,1,82.58,10.18,12.82,12.82,0,0,1,95.39,23Z"
                      shape-rendering="geometricPrecision"
                    ></path>
                    <ellipse
                      className="cls-5"
                      cx="82.58"
                      cy="17.82"
                      rx="9.46"
                      ry="7.26"
                      shape-rendering="geometricPrecision"
                    ></ellipse>
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </Col>
        <Col className="footer-top-right " span={12}>
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
      <Row className="footer-bottom border-top">
        <Col className="footer-bottom-left" span={14}>
          <address>
            Công ty Cổ phần VieON - Địa chỉ: Tầng 5, 222 Pasteur, Phường Võ Thị
            Sáu, Quận 3, Thành phố Hồ Chí Minh.
            <br />
            Email:support@vieon.vn| Hotline: 1800.599.920(miễn phí)
            <br />
            Giấy phép Cung cấp Dịch vụ Phát thanh, Truyền hình trả tiền số
            247/GP-BTTTT cấp ngày 21/07/2023.
          </address>
        </Col>
        <Col className="footer-bottom-right" span={10}>
          <div className="MaQR">
            <img
              src="https://static2.vieon.vn/vieon-images/2022-web/navigation/QRCodeDownApp.png"
              alt="Mã QR Download App VieOn"
              width="64px"
              height="64px"
            />
          </div>
          <div className="text-left">
            <div className="download-label">Quét mã QR để tải ứng dụng</div>
            <div className="app">
              <div className="app-ios">
                <a href="https://itunes.apple.com/us/app/id1357819721">
                  <img
                    src="https://static2.vieon.vn/production-vieon-web-v5-2/assets/img/sprites/Download-Appstore.svg"
                    alt="Tải ứng dụng VieON với IOS"
                  />
                </a>
              </div>
              <div className="app-android">
                <a href="https://play.google.com/store/apps/details?id=vieon.phim.tv">
                  <img
                    src="https://static2.vieon.vn/production-vieon-web-v5-2/assets/img/sprites/download-googleplay.svg"
                    alt="Tải ứng dụng VieON với CH-Play"
                  />
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
