
import React from "react";


export default function MainContainer() {



    return (
        <div className="main">



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
                {/* <TextBox /> */}

            </div>



        </div>
    )

}