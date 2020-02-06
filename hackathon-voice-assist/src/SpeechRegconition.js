import React from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

const Dictaphone = ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition,
  onTranscriptChange,
}) => {
  React.useEffect(() => {
    onTranscriptChange(transcript); 
  }, [transcript])

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div>
    </div>
  );
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);