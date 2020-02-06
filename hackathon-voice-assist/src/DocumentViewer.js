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
    const documentText = 'A vacation rental agreement is simply a contract between the property owner and the renter. It is similar to a lease agreement for an apartment, except for a vacation rental agreement only covers the short period of time your guests are renting your property. A vacation rental agreement spells out the responsibilities of the owner and those of the guests. For example, the owner agrees to make sure the renters have a key to enter the premises. The renters agree not to do anything illegal on the property.'
    const endText = 'Would you like to sign this agreement?'
    const [currentSpeech, setCurrentSpeech] = React.useState('');
    const [readText, setDocumentText] = React.useState(documentText + endText)
    const [isSigned, setIsSigned] = React.useState(false);

// React.useEffect(() => {
//     let selected = setSpeech();
//     selected.then((voices) => {
//         console.error(voices[0]) 
//         let utterance = new window.SpeechSynthesisUtterance();

//         utterance.voice = voices[0];
//         utterance.text = 'Testing testing testing'
//         utterance.lang = 'en-GB';
//         utterance.pitch =  0.8;
//         utterance.rate =  1;
//         utterance.volume =  1;

//         window.speechSynthesis.cancel();
//         window.speechSynthesis.speak(utterance);
//     });
// }, [])

    const handleTranscriptChange = (transcript) => {
        if(transcript && (transcript.includes('sign the document') || transcript.includes('sign') || transcript.includes('sign now') || transcript.includes('yes'))) {
            setIsSigned(true);
        }

        if(transcript && transcript.includes('read the document')) {
            setCurrentSpeech(documentText);
        }

        if(transcript && transcript.includes('stop')) {
            setCurrentSpeech('');
        }
        
    }

    return (
        <div className="document-viewer">
            <SpeechRecognition onTranscriptChange={handleTranscriptChange} />
            <TextToSpeech text={readText} boolPlay={!!currentSpeech} />
            
            <div className="document-viewer__document">
                {documentText}
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/><br/>
                 <SignButton isSigned={isSigned} />
            </div>
        </div>
    );
}

export default DocumentViewer;
