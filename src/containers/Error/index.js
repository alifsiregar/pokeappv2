/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { ErrorContainer } from "./_style";

const ErrorPage = () => {
  return (
    <div title="ErrorPage" css={ErrorContainer}>
      <h1>PAGE NOT FOUND OR CONNECTION ERROR</h1>
      <Link to="/">
        <h3>Click me to go home!</h3>
      </Link>
    </div>
  );
};

export default ErrorPage;
