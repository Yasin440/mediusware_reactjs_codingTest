import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AllContentsModal from './AllContentsModal';
import ContentByCountry from './ContentByCountry';
import DetailsModal from './DetailsModal';

const Problem2 = () => {
    const { content } = useParams();
    const [showDetails, setShowDetails] = useState(null);
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                <div className="d-flex justify-content-center gap-3">
                    <Link to="/problem-2/all_content" className="btn btn-lg btn-outline-primary" type="button" data-bs-target="#exampleModal" >All Content</Link>
                    <Link to="/problem-2/us_country" className="btn btn-lg btn-outline-warning" type="button" >US Contacts</Link>
                </div>
            </div>
            {
                showDetails ? <DetailsModal setShowDetails={setShowDetails} country={showDetails} /> :
                    <>
                        {
                            content === 'all_content' &&
                            <AllContentsModal setShowDetails={setShowDetails} />
                        }
                        {
                            content === 'us_country' &&
                            <ContentByCountry setShowDetails={setShowDetails} />
                        }
                    </>
            }
        </div>
    );
};

export default Problem2;