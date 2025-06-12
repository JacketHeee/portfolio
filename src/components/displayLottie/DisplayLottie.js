import React, { Component, Suspense } from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  render() {
    const { animationData, width, height } = this.props;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    };

    // Tạo object style với căn giữa
    const lottieStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };
    if (width) lottieStyle.width = width;
    if (height) lottieStyle.height = height;

    return (
      <Suspense fallback={<Loading />}>
        <Lottie
          animationData={defaultOptions.animationData}
          loop={defaultOptions.loop}
          style={Object.keys(lottieStyle).length ? lottieStyle : undefined}
        />
      </Suspense>
    );
  }
}