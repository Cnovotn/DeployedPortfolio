import React, { Component } from 'react'

import './style.css'

export default class Load extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <div class="stage centered">
                    <div class="wrapper">
                        <div class="slash"></div>
                        <div class="sides">
                            <div class="side"></div>
                            <div class="side"></div>
                            <div class="side"></div>
                            <div class="side"></div>
                        </div>
                        <div class="text">
                            <div class="text--backing">Clayton_Novotney</div>
                            <div class="text--left">
                                <div class="inner">Clayton_Novotney</div>
                            </div>
                            <div class="text--right">
                                <div class="inner">Clayton_Novotney</div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}