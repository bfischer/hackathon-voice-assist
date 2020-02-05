import React from 'react';
import logo from './logo.svg';
import {Button} from '@olive/react';
import Speech from 'react-speech';
import './DocumentViewer.css';
import SignButton from './components/button';
import TextToSpeech from './VoiceAssistant/textToSpeech';

const DocumentViewer = () => {
    const [currentSpeech, setCurrentSpeech] = React.useState('');
    const [isSigned, setIsSigned] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setCurrentSpeech('This is a test document. This is meant to demonstrate how to sign using only your voice. Would you like to sign this document?')
           
             setTimeout(() => {
                 setIsSigned(true);
             }, 10000)
        }, 2000)
    }, []);

    // React.useEffect(() => {
    //     setTimeout(() => {
    //         let button = document.getElementsByClassName('rs-play');
          
    //         if(button && button[0]) {
    //             console.error(button)
    //             console.error(button[0])
    //             button[0].click();
    //         }
    //     }, 2500)
       
    // }, [currentSpeech]);

    return (
        <div className="document-viewer">
            {
                currentSpeech ? <TextToSpeech text={currentSpeech} boolPlay={!!currentSpeech} /> : null
            }
            <div className="document-viewer__document">
                This is a test document. This is meant to demonstrate how to sign
                 using only your voice.

                 <SignButton isSigned={isSigned} />
            </div>
        </div>
    );
}

export default DocumentViewer;
