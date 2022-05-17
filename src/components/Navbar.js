import { useState } from "react";
import {
  Button,
  Container,
  Nav,
  NavItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NavLink,
} from "reactstrap";

function NavBar() {
  const [modal, toggleModal] = useState(false);
  return (
    <>
      <Nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Container>
          <NavItem className="navbar-brand" href="#">
            Mini Message Board
          </NavItem>
          <NavLink
            onClick={() => toggleModal(!modal)}
            className="navbar-brand"
            href="#"
          >
            About
          </NavLink>
        </Container>
      </Nav>

      <Modal isOpen={modal}>
        <ModalHeader>About this small messages board</ModalHeader>
        <ModalBody> 
          Hope you enjoyed this mini message board. It was made using:
          <ul><h5 className="mt-3">Front End</h5>
            <li>React</li>
            <li>Bootstrap, using Bootswatch themes below</li>
            <li><a href="https://bootswatch.com">https://bootswatch.com/</a></li>
          </ul>
          <ul><h5 className="mt-3">Back End</h5>
            <li>MongoDB</li>
            <li>Mongodb Atlas</li>
            <li>Monk</li>
            <li>Morgan</li>
            <li>Express</li>
            <li>Joi</li>
          </ul>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => toggleModal(!modal)}>Close</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default NavBar;
