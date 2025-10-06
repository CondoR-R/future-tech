import {useEffect} from "react";

export const useTitle = (title: string) => {
  useEffect(() => {
    document.title = `Future Tech | ${title}`;
  }, [title]);

  return null;
}