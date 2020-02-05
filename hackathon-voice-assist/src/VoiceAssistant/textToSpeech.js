import React, { useEffect } from 'react';
import Speech from 'react-speech';

function TextToSpeech({text, boolPlay, boolStop, boolPause, boolResume}){

    useEffect(() => {
        document.getElementsByClassName('rs-play')[0].style.display = 'none';
    })

    useEffect(() => {
        if (boolPlay){
            document.getElementsByClassName('rs-play')[0].click();
        }
    }, [boolPlay]);

    return (
        <Speech
            text={text} />
    );
}

export default TextToSpeech;