const getRandomIntegerInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getTimeStampFromSeconds = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds - minutes * 60);

    let durationString = "";
    if (minutes === 0) durationString = "00:";
    else if (minutes < 10) durationString = `0${minutes}:`;
    else durationString = `${minutes}:`;

    if (seconds === 0) durationString += "00";
    else if (seconds < 10) durationString += `0${seconds}`;
    else durationString += `${seconds}`;

    return durationString;
};

const drawVisualizer = (canvas, normalizedData, wrapperClass) => {
    const lineWidth = 5;
    for (let i = 0; i < normalizedData.length; i++) {
        const newSpan = document.createElement("span");
        newSpan.style.width = `${lineWidth}px`;
        newSpan.style.height = `${normalizedData[i] * 50}px`;
        newSpan.style.borderRadius = `${lineWidth}px`;
        newSpan.className = wrapperClass;
        canvas.appendChild(newSpan);
    }
};

export { getRandomIntegerInRange, getTimeStampFromSeconds, drawVisualizer };
