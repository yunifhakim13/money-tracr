import { Spinner } from "react-bootstrap";

const LoaderWhite = () => (
  <div className="d-flex justify-content-center align-items-center loader-container">
    <Spinner animation="border" role="status" variant="white">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
);

export default LoaderWhite;
