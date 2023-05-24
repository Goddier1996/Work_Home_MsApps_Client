import React, { useState } from 'react';
import ListCategories from './ListCategories';
import { Modal, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import '../css/elements.css'
import HomeIcon from '@mui/icons-material/Home';


const Categories = () => {

    const history = useHistory()


    // pop up categories
    const [showModelCategories, setShowModelCategories] = useState(false);
    const handleCloseModelCategories = () => setShowModelCategories(false);
    const handleShowModelCategories = () => setShowModelCategories(true);


    const hideModelCategory = () => {

        setShowModelCategories(false);
    }



    const backHomePage = () => {
        history.push("/");
        window.location.reload(false);
    }



    return (

        <>
            <div className='buttonBackHome'>
                <HomeIcon onClick={backHomePage} style={{ fontSize: "35px", color: "gray" }} />
            </div>


            <div className='buttonShowCategory'>
                <Button
                    onClick={handleShowModelCategories}
                    variant="success"
                    style={{ color: "white", textTransform: "capitalize" }}>
                    Select Category
                </Button>



                {/* model popup Category */}
                <Modal show={showModelCategories} onHide={handleCloseModelCategories}>

                    <ListCategories hideModel={hideModelCategory} />

                </Modal>
            </div>

        </>
    )
}

export default Categories