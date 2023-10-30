"use client";

import React from "react";
import cx from "classnames";

import styles from "./styles.module.scss";

export type VideoController = "pause" | "replay" | "play";

export type Props = {
  src: string;
  width: number;
  height: number;
  children?: React.ReactNode;
  isNeedControls?: boolean;
  classNames?: {
    base?: string;
    play?: string;
    pause?: string;
    replay?: string;
    video?: string;
    children?: string;
  };
};

export const Video = ({
  src,
  isNeedControls = false,
  width,
  height,
  children,
  classNames,
}: Props) => {
  const [controller, setController] = React.useState<VideoController>("play");

  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const handlerClickPlay = () => {
    const video = videoRef.current;

    if (video) {
      setController("pause");
      video.play();
    }
  };

  const handlerClickPause = () => {
    const video = videoRef.current;

    if (video) {
      setController("play");
      video.pause();
    }
  };

  React.useLayoutEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (isNeedControls) {
      video.addEventListener("loadeddata", () => {
        video.setAttribute("controls", "true");
      });
    }
  }, [isNeedControls]);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const handlerStop = () => {
      setController("replay");
    };

    video.addEventListener("ended", () => handlerStop());

    return () => video.removeEventListener("ended", () => handlerStop());
  }, []);

  return (
    <div className={cx(styles.base, classNames?.base)}>
      <div
        className={cx(
          styles.video,
          classNames?.video
        )}
      >
        <video src={src} width={width} height={height} ref={videoRef} />
        {children && (
          <div
            className={cx(
              styles.children,
              controller !== "play" && styles.children_hide,
              classNames?.children,
            )}
          >
            {children}
          </div>
        )}
      </div>
      <button
        className={cx(
          styles.play,
          styles[`play__${controller}`],
          classNames?.play
        )}
        onClick={() => handlerClickPlay()}
      ></button>
      <button
        className={cx(
          styles.pause,
          styles[`pause__${controller}`],
          classNames?.pause
        )}
        onClick={() => handlerClickPause()}
      ></button>

      <button
        className={cx(
          styles.replay,
          styles[`replay__${controller}`],
          classNames?.replay
        )}
        onClick={() => handlerClickPlay()}
      ></button>
    </div>
  );
};
