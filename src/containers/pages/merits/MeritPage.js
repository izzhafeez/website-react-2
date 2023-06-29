import { useParams } from "react-router-dom";

const MeritPage = () => {
  const { page } = useParams();
  return page;
};

export default MeritPage;