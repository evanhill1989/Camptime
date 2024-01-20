import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";

import { useSelector } from "react-redux";

const CampsiteDetail = ({ campsite }) => {
  console.log(campsite);
  const { image, name, description } = campsite;

  return (
    <Col md="5" className="m-1">
      <Card>
        <CardImg to src={image} alt={name} />
        <CardBody>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CampsiteDetail;
