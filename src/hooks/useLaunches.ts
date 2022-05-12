import { useEffect, useState } from "react";
import * as API from "../services/spacexAPI";
import { Launch } from "../types/launches";
import { getParams } from "../utils";

export const useLaunches = () => {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [query, setQuery] = useState<Record<string, string>>({
    launch_year: "",
    site_id: "",
    rocket_name: "",
    launch_success: "",
  });

  const [currentPage, setCurrentPage] = useState<number>(0);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    const queryParams = new URLSearchParams(query).toString();
    console.log(queryParams);

    API.getLaunches(queryParams, 0).then((data: Launch[]) => {
      setLaunches(data);
      setCurrentPage(0);
      setIsLoading(false);
    });
  }, [query]);

  const addMore = () => {
    setIsLoading(true);
    setCurrentPage(currentPage + 10);
    const queryParams = new URLSearchParams(query).toString();

    API.getLaunches(queryParams, currentPage)
      .then((data: Launch[]) => {
        if (!data.length) {
          setHasMore(false);
        } else {
          setLaunches([...launches, ...data]);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const setFilter = (id: string, value: string) => {
    const result: Record<string, string> = { ...query };

    result[id] = value;
    setQuery(result);
    //setFlag(!flag);
  };

  console.log("query", query);

  return {
    launches,
    setFilter,
    addMore,
    isLoading,
    hasMore,
  };
};
