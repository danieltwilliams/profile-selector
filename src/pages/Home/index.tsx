import { useState } from "react";
import { Typeahead, Profile, Spinner } from "../../components";
import { PersonalApiResponse, Personal } from "../../typings";
import { useFetchUrl } from "../../hooks/useFetchUrl";

let API_URL = process.env.REACT_APP_URL;

const Home: React.FC = () => {
  let { result, loading, error } = useFetchUrl<PersonalApiResponse>(API_URL);
  let [selectedProfile, setSelectedProfile] = useState<Personal | null>(null);

  if (loading && !result) {
    return <Spinner data-testid="loading" />;
  }

  debugger;

  let menuItemSelect = (e: Personal) => {
    setSelectedProfile(e);
  };

  return (
    <>
      <Typeahead
        label={"Pick a developer"}
        onMenuSelect={menuItemSelect}
        data={result && result.data}
        error={error}
      />
      {selectedProfile && result && <Profile data={selectedProfile} />}
    </>
  );
};

export default Home;
