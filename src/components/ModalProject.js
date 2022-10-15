import React from "react";
import { Carousel } from 'react-responsive-carousel';
import { carousel } from "../data/carousel";
import { getAssetsProject } from "../helpers/getAssetsProject";

const ModalProject = ({index, big}) => {

    return (
        <>
            <button type="button" className="btn btn-outline-dark" data-toggle="modal" data-target={"#exampleModalCenter" + index}>
                See Project
            </button>

            <div className={ big ? "modal fade bd-example-modal-lg" : "modal fade"} id={"exampleModalCenter" + index} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className={big ? "modal-dialog modal-dialog-centered modal-lg" : "modal-dialog modal-dialog-centered"} role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{backgroundColor: '#765996'}}>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Carousel showStatus={false} showIndicators={false}>
                                {
                                    carousel[index]?.map((item, i) => {
                                        return (
                                            <div key={i}>
                                                <img src={getAssetsProject(item)} alt={'Slide' + i} />
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