import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'

import CardColumns from 'react-bootstrap/CardColumns'
//import backgroundImages from "../api/background";

import data from "../api/background.json"

export default function MainContainer() {
    const newdata = data.map((data) => {
        return (
            <Card.Title>{data.quote}</Card.Title>
        )
    }
    )


    return (
        <div className="main">
            <h1>Textbox Webpage</h1>


            <div class="row" id="input-title">

                <div class="d-flex justify-content-center" id="main-header">

                    <input type="text" class="form-control" id="title-text-box" maxlength="55"
                        placeholder="Name This Page !"></input>

                </div>

            </div>
            <div class="container">

                <div class="row align-items-center">

                    <div class="col" id="textareacontent">
                        <label for="textarealabel" class="form-label"></label>
                        <textarea class="form-control" placeholder="Type in Me!" id="textarea"></textarea>
                    </div>


                </div>

            </div>
            
            <CardColumns className=" m-3 p-3 owncard ">  {newdata}  </CardColumns>

        </div>
    )

}