import React from "react";
import { Carousel } from 'react-responsive-carousel';
import { carousel } from "../data/carousel";

const ModalProject = ({index}) => {

    return (
        <>
            <button type="button" className="btn btn-outline-dark" data-toggle="modal" data-target={"#exampleModalCenter" + index}>
                See Project
            </button>

            <div className="modal fade bd-example-modal-lg" id={"exampleModalCenter" + index} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Carousel showArrows={false} showStatus={false} showIndicators={false}>
                                {
                                    carousel[index]?.map((item, i) => {
                                        return (
                                            <div key={i}>
                                                <img src={item} alt={'Slide' + i} />
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );  
}

export default ModalProject;