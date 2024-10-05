import {
  Params,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

import { Resolution } from "@/src/entities/entities";

type UseRouter = {
  params: Readonly<Params<string>>;
  searchParams: URLSearchParams;
  handleNavigateToHome: () => void;
  handleNavigateToResolution: (
    idResolution: Resolution,
    params: string
  ) => void;
};

export const useRouter = (): UseRouter => {
  const params = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleNavigateToHome = () => {
    return navigate("/");
  };

  const handleNavigateToResolution = (
    idResolution: Resolution,
    params: string
  ): void => {
    return navigate(`/json/resolution/${idResolution}?${params}`);
  };

  return {
    params: params,
    searchParams: searchParams,
    handleNavigateToHome: handleNavigateToHome,
    handleNavigateToResolution: handleNavigateToResolution,
  };
};
