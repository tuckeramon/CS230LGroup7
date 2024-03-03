function Card(){

    return(
        <div class="row text-center">
            <div class="col-sm-3">
                <div class="card text-white bg-primary">
                    <div class="card-header">
                        <h2 class="card-title">Card 01</h2>
                    </div>
                    <div class="card-body">
                    <p class="card-text">Some example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card text-white bg-success">
                <div class="card-header">
                    <h2 class="card-title">Card 01</h2>
                </div>
                    <div class="card-body">
                    <p class="card-text">Some example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card text-white bg-danger">
                    <div class="card-header">
                        <h2 class="card-title">Card 01</h2>
                    </div>
                    <div class="card-body">
                    <p class="card-text">Some example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Card;