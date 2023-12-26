
import { Col , Row } from 'reactstrap';
import CampsiteCard from './CampsiteCard';
import { selectAllCampsites } from './campsitesSlice';
import { selectRandomCampsite } from './campsitesSlice';

const CampsitesList = () => {
    const campsites = selectAllCampsites();
    console.log(campsites);
    console.log(selectRandomCampsite());
    return (
        <Row className='ms-auto'>
            {campsites.map( (campsite) => {
                    return (
                    <Col key={campsite.id} md='5' className='m-4'>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                    )
                }
            )}
        </Row>
    )
}

export default CampsitesList;