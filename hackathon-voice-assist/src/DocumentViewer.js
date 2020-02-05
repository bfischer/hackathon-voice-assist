import React from 'react';
import logo from './logo.svg';
import {Button} from '@olive/react';
import Speech from 'react-speech';
import './DocumentViewer.css';
import SignButton from './components/button';
import TextToSpeech from './VoiceAssistant/textToSpeech';
import SpeechRecognition from './SpeechRegconition';

function setSpeech() {
    return new Promise(
        function (resolve, reject) {
            let synth = window.speechSynthesis;
            let id;

            id = setInterval(() => {
                if (synth.getVoices().length !== 0) {
                    resolve(synth.getVoices());
                    clearInterval(id);
                }
            }, 10);
        }
    )
}

const DocumentViewer = () => {
    const [currentSpeech, setCurrentSpeech] = React.useState('');
    const [documentText, setDocumentText] = React.useState('This is a test document. This is meant to demonstrate how to sign using only your voice.')
    const [isSigned, setIsSigned] = React.useState(false);

React.useEffect(() => {
    let selected = setSpeech();
    selected.then((voices) => {
        console.error(voices[0]) 
        let utterance = new window.SpeechSynthesisUtterance();

        utterance.voice = voices[0];
        utterance.text = 'Testing testing testing'
        utterance.lang = 'en-GB';
        utterance.pitch =  0.8;
        utterance.rate =  1;
        utterance.volume =  1;

        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    });
}, [])

    const handleTranscriptChange = (transcript) => {
        if(transcript && transcript.includes('sign the document')) {
            setIsSigned(true);
        }

        if(transcript && transcript.includes('read the document')) {
            setCurrentSpeech(documentText);
        }
    }

    return (
        <div className="document-viewer">
            <SpeechRecognition onTranscriptChange={handleTranscriptChange} />
            <TextToSpeech text={currentSpeech} boolPlay={!!currentSpeech} />
            
            <div className="document-viewer__document">
                {documentText}
                 <SignButton isSigned={isSigned} />
            </div>
        </div>
    );
}

export default DocumentViewer;
