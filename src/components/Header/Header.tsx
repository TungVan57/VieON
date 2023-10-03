import "./Header.scss";
import { Row, Col, Button, Popover } from "antd";
import Icon, {
  UserOutlined,
  DownloadOutlined,
  SearchOutlined,
  HomeOutlined,
  FundProjectionScreenOutlined,
  ExpandOutlined,
  DribbbleOutlined,
  RedditOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";

const packageSignContent = (
  <div>
    <div className="pane_item">
      <img
        src="https://static2.vieon.vn/vieon-images/2022-payment-image/04/29/introPackages-icon/icon-promotion-vip.svg"
        alt="icon promotion"
      />
      <span>100.000+ giờ nội dung & 200 kênh truyền hình</span>
    </div>
    <div className="pane_item">
      <img
        src="https://static2.vieon.vn/testing-vieon-web-v5/assets/img/sprites/icon-promotion-hot.svg"
        alt="icon promotion"
      />
      <span>Xem nội dung sớm nhất & độc quyền</span>
    </div>
    <div className="pane_item">
      <img
        src="https://static2.vieon.vn/testing-vieon-web-v5/assets/img/sprites/icon-promotion-ads.svg"
        alt="icon promotion"
      />
      <span>Không quảng cáo</span>
    </div>
    <div className="pane_item">
      <img
        src="https://static2.vieon.vn/testing-vieon-web-v5/assets/img/sprites/icon-promotion-sub.svg"
        alt=""
      />
      <span>Tùy chọn Phụ đề/ Lồng tiếng/ Thuyết minh </span>
    </div>
    <div className="pane_item">
      <img
        src="https://static2.vieon.vn/testing-vieon-web-v5/assets/img/sprites/icon-promotion-4k.svg"
        alt="icon promotion"
      />
      <span>Xem chất lượng hình ảnh Full HD/4K</span>
    </div>
  </div>
);

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <Row className="top-bar">
          <Col className="top-bar-left" span={16}>
            <div className="logo">
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
                      <stop
                        offset="1"
                        stop-color="#fff"
                        stop-opacity="0"
                      ></stop>
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
            </div>
            <div className="top-bar-menu ">
              <ul>
                <li className="menu_item">
                  <a href="#" className="active">
                    <span className="icon">
                      <HomeOutlined />
                    </span>
                    <span className="text">Trang chủ</span>
                  </a>
                  <div className="menu-sub ">
                    <ul>
                      <li>
                        <a href="#">Rap Việt</a>
                      </li>
                      <li>
                        <a href="#">Trực Tiếp</a>
                      </li>
                      <li>
                        <a href="#">Phim Bộ</a>
                      </li>
                      <li>
                        <a href="#">Phim Điện Ảnh</a>
                      </li>
                      <li>
                        <a href="#">VIP</a>
                      </li>
                      <li>
                        <a href="#">Masked Singer VN</a>
                      </li>
                      <li>
                        <a href="#">Hoa Vương</a>
                      </li>
                      <li>
                        <a href="#">Tin Tức</a>
                      </li>
                      <li>
                        <a href="#">TV Show</a>
                      </li>
                      <li>
                        <a href="#">VieON Flex</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="menu_item">
                  <a href="#">
                    <span className="icon">
                      <FundProjectionScreenOutlined />
                    </span>
                    <span className="text">Truyền hình</span>
                  </a>
                </li>
                <li className="menu_item">
                  <a href="#">
                    <span className="icon">
                      <ExpandOutlined />
                    </span>
                    <span className="text">HBO GO</span>
                  </a>
                </li>
                <li className="menu_item">
                  <a href="#">
                    <span className="icon">
                      <DribbbleOutlined />
                    </span>
                    <span className="text">Thể thao</span>
                  </a>
                </li>
                <li className="menu_item">
                  <a href="#">
                    <span className="icon">
                      <RedditOutlined />
                    </span>
                    <span className="text">Thiếu nhi</span>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col className="top-bar-right " span={8}>
            <div className="package-sign relative">
              <Popover
                content={packageSignContent}
                title="Đăng ký gói nhận những quyền lợi của VIP"
              >
                <Button>Đăng ký gói</Button>
              </Popover>
            </div>
            <div className="insert-code relative">
              <Popover title="Nhấn để nhập mã ưu đãi tặng gói">
                <Button>Nhập mã VieON</Button>
              </Popover>
            </div>
            <ul className="menu relative">
              <li className="menu_item">
                <Popover title="Nhấn để tìm kiếm nội dung">
                  <SearchOutlined className="icon" />
                </Popover>
              </li>
              <li className="menu_item">
                <Popover title="Nhấn để tải ứng dụng">
                  <DownloadOutlined className="icon" />
                </Popover>
              </li>
              <li className="menu_item">
                <Popover title="Nhấn để đăng nhập / đăng ký">
                  <UserOutlined className="icon" />
                </Popover>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default Header;
