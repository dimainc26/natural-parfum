import { useSearchParams } from "react-router-dom";

const useURLParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const addParam = (key: string, value: string) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.set(key, value);
    setSearchParams(currentParams);
  };

  const removeParam = (key: string) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.delete(key);
    setSearchParams(currentParams);
  };

  const toggleParam = (key: string, value: string) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    const values = currentParams.getAll(key);

    if (values.includes(value)) {
      currentParams.delete(key);
      values
        .filter((v) => v !== value)
        .forEach((v) => currentParams.append(key, v));
    } else {
      currentParams.append(key, value);
    }
    setSearchParams(currentParams);
  };

  const getParam = (key: string) => searchParams.get(key);

  return { addParam, removeParam, toggleParam, getParam };
};

export default useURLParams;
