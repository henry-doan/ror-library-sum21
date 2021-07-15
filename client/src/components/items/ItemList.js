import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const ItemList = ({ items }) => (
  <Container>
    <Row> 
      {
        items.map( i => 
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={i.pic} />
              <Card.Body>
                <Card.Title>Title: {i.title}</Card.Title>
                <Card.Text>
                  Author: {i.author}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Genre: {i.genre}</ListGroupItem>
                <ListGroupItem>Item Type: {i.item_type}</ListGroupItem>
              </ListGroup>
            </Card>
          </Col>  
        )
      }
    </Row>
  </Container>
)

export default ItemList;