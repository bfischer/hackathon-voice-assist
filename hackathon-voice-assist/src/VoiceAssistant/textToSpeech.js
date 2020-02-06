import React, { useEffect } from 'react';
import Speech from 'react-speech';

function TextToSpeech({text, boolPlay, boolStop, boolPause, boolResume}){

//    useEffect(() => {
//        document.getElementsByClassName('rs-play')[0].style.background = "lightblue url('../images/startBtn.PNG') no-repeat fixed center";
//     })

    useEffect(() => {
        if (boolPlay){
            console.error('should read now')
            document.getElementsByClassName('rs-play')[0].click();
        }
    }, [boolPlay]);

    return (
        <Speech
            text={text} displayText="Start" textAsButton={true} />
    );
}

export default TextToSpeech;