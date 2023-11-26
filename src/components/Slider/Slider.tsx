import React, { useState } from "react";
import { Carousel, Button } from "antd";
import "./Slider.scss";
import ReactPlayer from "react-player";
import { CaretRightOutlined, InfoCircleOutlined } from "@ant-design/icons";

const videoData = [
  {
    // url: "https://www.youtube.com/watch?v=8ugaeA-nMTc",
    url: "https://trailer.vieon.vn/Teaser_Kundo_KyNguyenTanBao.mp4",
    details: "Kỷ Nguyên Tàn Bạo",
    seeMoreLink: "https://example.com/details1",
  },
  {
    // url: "https://www.youtube.com/embed/eOrNdBpGMv8?si=8jsKdmAwLWL3Ehl_",
    url: "https://trailer.vieon.vn/Teaser_DuaHuaLapLanh_38s.mp4",
    details: "Dua Hua Lap Lanh",
    seeMoreLink: "https://example.com/details2",
  },
  {
    // url: "https://www.youtube.com/embed/d96cjJhvlMA?si=MABq9pHhg6gNwGqS",
    url: "https://trailer.vieon.vn/Teaser_NguoiYeuDau.mp4",
    details: "Người yêu dấu",
    seeMoreLink: "https://example.com/details3",
  },
  {
    // url: "https://www.youtube.com/embed/xjDjIWPwcPU?si=duWXXeUXJiEoPNfG",
    url: "https://trailer.vieon.vn/Teaser_2N1D_s02.mp4",
    details: "2 Ngày 1 Đêm",
    seeMoreLink: "https://example.com/details4",
  },
];

const Slider: React.FC = () => {
  const [open, setOpen] = useState(true);

  const onChange = (checked: boolean) => {
    setOpen(checked);
  };

  return (
    <Carousel>
      {videoData.map((data, index) => (
        <div key={index} className="slider-video">
          <ReactPlayer
            url={data.url}
            playing
            muted
            width="100%"
            height="70%"
            className="react-player"
          />
          <div className="video-details">
            <Button
              className="btn-1"
              type="primary"
              size="large"
              href={data.seeMoreLink}
              target="_blank"
            >
              <CaretRightOutlined className="icon" /> Xem ngay
            </Button>
            <Button
              className="btn-2"
              type="primary"
              size="large"
              href={data.seeMoreLink}
              target="_blank"
            >
              <InfoCircleOutlined className="icon" />
              Chi tiết
            </Button>
          </div>
          {/* <div>
            <FloatButton.Group
              open={open}
              trigger="click"
              style={{ right: 24 }}
              icon={<CustomerServiceOutlined />}
            >
              <FloatButton />
              <FloatButton icon={<CommentOutlined />} />
            </FloatButton.Group>
            <Switch onChange={onChange} checked={open} style={{ margin: 16 }} />
          </div> */}
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
