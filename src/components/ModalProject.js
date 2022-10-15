import React from "react";

const ModalProject = ({carousel}) => {

    return (
        <>
            <button type="button" className="btn btn-outline-dark" data-toggle="modal" data-target="#exampleModalCenter">
                See Project
            </button>

            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={carousel[0]} alt={'Slide0'} />
                                    </div>
                                    {
                                        carousel.slice(1).map((item, index) => {
                                            return (
                                                <div className="carousel-item" key={index}>
                                                    <img className="d-block w-100" src={item} alt={'Slide' + index} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );  
}

export default ModalProject;