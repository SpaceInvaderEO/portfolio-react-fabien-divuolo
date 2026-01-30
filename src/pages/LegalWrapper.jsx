import { Helmet } from "react-helmet";
import Legal from "./Legal";

function LegalWrapper() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Legal />
    </>
  );
}

export default LegalWrapper;