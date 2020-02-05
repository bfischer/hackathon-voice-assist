import {SignTag, Signature} from '@olive/react'
import React, { Component } from 'react';

// import { Container } from './styles';

export default class SignButton extends Component {
    state={
        isSigned: this.props.isSigned
    }
    render() {
        return (
            <div>
                {this.state.isSigned?
                    <Signature
                        name="Amy Templeton"
                        userId="83F3A089A46C4FEAD23804"
                    />
                    :
                    <SignTag text="Sign"
                    />
                 }
            </div>
        );
    }
}

