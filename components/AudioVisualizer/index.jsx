import styles from "./AudioVisualizer.module.scss";

import ReactPlayer from "react-player";
import { useRef, useState } from "react";

import { getTimeStampFromSeconds, drawVisualizer } from "../utils";

const AudioVisualizer = ({ test, isTestPlaying }) => {
    const audioPlayerRef = useRef();
    const totalDuration = useRef(0);
    const audioProgressBarRef = useRef();
    const visualizerRef = useRef();

    const [currentDuration, setCurrentDuration] = useState("00:00");

    const updateTotalDuration = (duration) => {
        totalDuration.current = duration;
        setCurrentDuration(getTimeStampFromSeconds(duration));
        drawVisualizer(
            visualizerRef.current,
            test.wavePoints,
            styles["visualizer-bar"]
        );
    };

    const updatePlayerSeekStatus = (status) => {
        const remainingTime = totalDuration.current - status.playedSeconds;
        setCurrentDuration(getTimeStampFromSeconds(remainingTime));
        audioProgressBarRef.current.style.width = `${status.played * 100}%`;
    };

    return (
        test && (
            <div className={styles["visualizer-wrapper"]}>
                <ReactPlayer
                    ref={audioPlayerRef}
                    playing={isTestPlaying}
                    url={`/assets/audio/${test.id}.mp3`}
                    onDuration={updateTotalDuration}
                    onProgress={updatePlayerSeekStatus}
                    volume={0}
                    height={0}
                    width={0}
                />
                <div className={styles["test-details"]}>
                    <span className={styles["test-title"]}>{test.name}</span>
                    <span className={styles["test-title"]}>
                        {currentDuration}
                    </span>
                </div>

                <div ref={visualizerRef} className={styles["visualizer"]}></div>

                <div
                    ref={audioProgressBarRef}
                    className={styles["audio-progress"]}
                ></div>
            </div>
        )
    );
};

export default AudioVisualizer;
