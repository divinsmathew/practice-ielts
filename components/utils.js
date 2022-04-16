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

export { getRandomIntegerInRange, getTimeStampFromSeconds };
