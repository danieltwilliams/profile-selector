import { useHistory } from "react-router-dom";
import { PrimaryButton } from "../../components";

const NotFound: React.FC = () => {
  const history = useHistory();

  let previousPage = () => {
    history.goBack();
  };

  return (
    <>
      <h1>This page has not be found :(</h1>

      <PrimaryButton onClick={previousPage}>Previous Page</PrimaryButton>
    </>
  );
};

export default NotFound;
