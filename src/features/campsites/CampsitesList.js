import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { Col , Row } from 'reactstrap';
import CampsiteCard from './CampsiteCard';

const CampsitesList = () => {
    return (
        <Row className='ms-auto'>
            {CAMPSITES.map( (campsite) => {
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