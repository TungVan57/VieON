import React, { useState, useRef } from "react";
import { Carousel, Button, FloatButton } from "antd";
import "./Slider.scss";
import ReactPlayer from "react-player";
import {
  CaretRightOutlined,
  InfoCircleOutlined,
  NotificationOutlined,
  SoundOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

const videoData = [
  {
    // url: "https://www.youtube.com/watch?v=8ugaeA-nMTc",
    url: "https://trailer.vieon.vn/Teaser_OngChuCuaToi_50s.mp4",
    details: "Ông Chủ Của Tôi",
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
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [muteState, setMuteState] = useState<boolean[]>(
    Array(videoData.length).fill(true)
  );

  const carouselRef = useRef(null);

  const toggleMute = (index: number) => {
    const newMuteState = [...muteState];
    newMuteState[index] = !newMuteState[index];
    setMuteState(newMuteState);
  };

  const handleAfterChange = (current: number) => {
    setCurrentSlide(current);
  };

  const handleVideoEnd = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % videoData.length);
  };

  const goToSlide = (slide: number) => {
    if (carouselRef.current) {
      (carouselRef.current as any).goTo(slide);
    }
  };

  return (
    <div className="slider-container">
      <Carousel
        ref={carouselRef}
        afterChange={handleAfterChange}
        effect="fade"
        initialSlide={currentSlide}
      >
        {videoData.map((data, index) => (
          <div key={index} className="slider-video">
            <ReactPlayer
              url={data.url}
              playing={index === currentSlide}
              muted={muteState[index]}
              width="100%"
              height="70%"
              className="react-player"
              onEnded={handleVideoEnd}
              autoplay={false}
            />
            <div className="film-detail">
              <div className="video-details">
                <div className="detail-btn">
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
                <div className="sound-btn">
                  <Button
                    className="float-btn"
                    type="primary"
                    size="large"
                    shape="circle"
                    onClick={() => toggleMute(index)}
                    icon={
                      muteState[index] ? (
                        <NotificationOutlined className="icon" />
                      ) : (
                        <SoundOutlined className="icon" />
                      )
                    }
                  />
                </div>
              </div>
              <div className="control-btn">
                <Button
                  size="large"
                  className="ct-btn"
                  type="primary"
                  shape="circle"
                  icon={<LeftOutlined className="icon-ct-btn" />}
                  onClick={() => goToSlide(currentSlide - 1)}
                />
                <Button
                  size="large"
                  className="ct-btn"
                  type="primary"
                  shape="circle"
                  icon={<RightOutlined className="icon-ct-btn" />}
                  onClick={() => goToSlide(currentSlide + 1)}
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <FloatButton.BackTop />
    </div>
  );
};

export default Slider;
