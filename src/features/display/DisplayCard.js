import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

//This is breaking because we're trying to render
// This is breaking specifically because of the image ! Everything else in the json-server fetch runs
const DisplayCard = ({ item }) => {
  if (!item) {
    console.log("NO item.image FOUND!!");
    return null; // or some fallback UI
  }

  const { image, name, description } = item;
  return (
    <Card>
      <CardImg src={image} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default DisplayCard;
