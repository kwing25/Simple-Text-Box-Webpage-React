import React from "react";

import 'moment-timezone';
import Clock from 'react-live-clock';
import TextBox from "./TextBox";

export default function MainContainer() {

    return (
        <div className="main">

            <div className="container">
                <div className="clock-container">
                    <div id="date">
                        <Clock format={'dddd, MMMM Do, YYYY'} ticking={true} timezone={'US/Mountain'} />
                    </div>
                    <div id="time">
                        <Clock format={'h:mm:ss A'} ticking={true} timezone={'US/Mountain'} />
                    </div>
                </div>
            </div>

            <div className="container">
                <h1 id="title">Text Box Tab <i class="far fa-file-alt"></i></h1>
                <TextBox />
            </div>

        <footer>
            <small><a href="github.com/kwing25">© Kendra Wing 2021</a> </small>
        </footer>

        </div>
    )

}