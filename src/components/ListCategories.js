import React from 'react';
import { useHistory } from 'react-router-dom';
import '../css/elements.css'
import { Row } from 'react-bootstrap';



const ListCategories = (props) => {

    const history = useHistory()

    // array categories
    const arrayCategories = [
        { id: '1', typeCategory: 'Sports' }
        , { id: '2', typeCategory: 'Cars' }
        , { id: '3', typeCategory: 'Lego' }
        , { id: '4', typeCategory: 'Movies' }
        , { id: '5', typeCategory: 'Trip' }
        , { id: '6', typeCategory: 'Nature' }
        , { id: '7', typeCategory: 'Work' }
        , { id: '8', typeCategory: 'Phone' }
    ];


    const sendTypeCategory = (type) => {

        history.push(`/Elements/${type}`);
        window.location.reload(false);
    }



    return (
        <div className='modelCategory'>

            <div className='closePopUp' onClick={props.hideModel}>
                <h1>X</h1>
            </div>


            <div className='titleCategory'>
                <h1>Select Category :</h1>
            </div>


            <div className='positionCategory'>
                <Row xs={3} md={4} className="g-4">

                    {arrayCategories.map((category) => (
                        <p key={category.id} onClick={() => sendTypeCategory(category.typeCategory)}>
                            {category.typeCategory}
                        </p>
                    ))}
                </Row>
            </div>

        </div>

    )
}

export default ListCategories