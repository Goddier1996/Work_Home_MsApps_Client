import React, { useEffect, useState } from 'react';
import { countData } from '../Api/LoadDataDataBase'
import { useParams } from 'react-router-dom';
import '../css/elements.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Col, Row, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
import { useSelector, useDispatch } from 'react-redux'
import { fetchValueItemsCategory } from '../Redux/featuersAllValueCategory'
import LoadingStyle from './LoadingStyle'



const Elements = () => {


    // use redux
    const categoryValueId = useSelector(state => state.categoryValueId);
    const dispatch = useDispatch();


    const [dataForCount, setDataForCount] = useState([]);
    const [SizeAllPages, setSizeAllPages] = useState();
    const [pageNumberNow, setPageNumberNow] = useState(1);

    const { id } = useParams();



    const loadDataCategoryIdCount = async () => {

        setDataForCount(await countData(id));
    }


    // here func next,back show data 9 elements
    const BackPageReviews = () => {

        setPageNumberNow((p) => {
            if (p === 1) {
                return p;
            }

            window.scrollTo(0, 0);
            return p - 1;
        })
    }

    const NextPageReviews = () => {

        setPageNumberNow((p) => {
            if (p === SizeAllPages) {
                return p;
            }

            window.scrollTo(0, 0);
            return p + 1;
        })
    }




    const showInfoItemImage = (views, downloads, collections, likes, comments, user, userImageURL) => {

        Swal.fire({
            html: `<div class="popUpUserImage">
            <br/>
            <img src=${userImageURL}>
            <h5>Name user : ${user}</h5>
            
            <p>views : ${views} <br/>
            downloads : ${downloads}<br/>
            collections : ${collections}<br/>
            likes : ${likes}<br/>
            comments : ${comments}</p><br/>
            </div>`,
            confirmButtonText: 'Ok',
            confirmButtonColor: 'green',
        })
    }



    // load count id category
    useEffect(() => {

        loadDataCategoryIdCount();
    }, []);



    // active Redux and save data
    useEffect(() => {

        let dataCategory = {
            typeCategory: id,
            pageNum: pageNumberNow
        }

        dispatch(fetchValueItemsCategory(dataCategory))

    }, [dispatch, pageNumberNow]);



    // save count items
    useEffect(() => {

        let result = Math.round((dataForCount));
        let resultNumber = Number.isInteger(result);

        if (resultNumber == false) {

            let integerNumber = Math.trunc(result)
            setSizeAllPages(integerNumber + 1);
        }

        else if (resultNumber == true) {
            setSizeAllPages(result);
        }
    })




    return (
        <>

            <div className='typeCategory'>
                <p>Type Category - {id}</p>
            </div>

            <div className='nextBackButton'>
                <div className='prevButton'>
                    <Button variant="success" style={{ color: "white", textTransform: "capitalize" }}
                        title='Previous Page'
                        onClick={BackPageReviews} disabled={pageNumberNow === 1}>
                        Prev
                    </Button>
                </div>

                <h2>page {pageNumberNow}</h2>

                <div className='nextButton'>
                    <Button variant="success" style={{ color: "white", textTransform: "capitalize" }}
                        title='Next Page'
                        onClick={NextPageReviews} disabled={pageNumberNow === SizeAllPages}>
                        Next
                    </Button>
                </div>
            </div>




            {/* show all data with id category */}
            {(categoryValueId.loading) ?
                <div >
                    <LoadingStyle />
                </div>
                :
                (!categoryValueId.loading && categoryValueId.error) ? <p>Error: {categoryValueId.error}</p> : null}

            {!categoryValueId.loading ? (

                <>

                    <div className='styleModels'>
                        <div className='models'>
                            <Row xs={1} md={3} className="g-4">

                                {categoryValueId.ValueCategory.map((data) => (
                                    <Col>
                                        <div className='styleModelsImages'>
                                            <img variant="top" src={data.webformatURL} onClick={() => showInfoItemImage(
                                                data.views,
                                                data.downloads,
                                                data.collections,
                                                data.likes,
                                                data.comments,
                                                data.user,
                                                data.userImageURL,
                                            )} />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </>

            ) : null}
        </>
    )
}

export default Elements;