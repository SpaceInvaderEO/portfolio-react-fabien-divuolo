import { Accordion } from "react-bootstrap";

function Legal() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Mentions légales</h2>
      <Accordion defaultActiveKey={null}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Éditeur du site</Accordion.Header>
          <Accordion.Body>
            John Doe<br />
            123 Rue du Web, 75000 Paris<br />
            Email: john.doe@example.com
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur du site</Accordion.Header>
          <Accordion.Body>
            OVH SAS<br />
            2 rue Kellermann – 59100 Roubaix – France<br />
            Tel: 1007
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
            Images libres de droits :{" "}
            <a
              href="https://pixabay.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixabay
            </a>
            <br />
            Favicon :{" "}
            <a
              href="https://www.flaticon.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flaticon
            </a>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Legal;