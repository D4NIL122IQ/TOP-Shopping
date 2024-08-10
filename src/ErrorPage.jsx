import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, vous etes tomber dans la page d'erreur !!</h1>
      <Link to="/">
        Revenir au salon ?
      </Link>
    </div>
  );
};

export default ErrorPage;