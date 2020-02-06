import {SignTag, Signature} from '@olive/react'
import React, { Component } from 'react';

// import { Container } from './styles';

export default class SignButton extends Component {
    render() {
        return (
            <div>
                {this.props.isSigned?
                    <Signature
                        name="Anh Bien"
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

