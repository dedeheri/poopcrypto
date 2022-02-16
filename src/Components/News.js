import React, { useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { REMOVE_NEWS_BY_QUERY } from "../Content/Action/Action-Types";
import { getNewsByQuery } from "../Content/Action/News";

const News = ({ slice }) => {
  const {
    details: { news, loading },
  } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(getNewsByQuery(id));
  }, []);

  useEffect(() => {
    return () => {
      dispatch({ type: REMOVE_NEWS_BY_QUERY });
    };
  }, []);

  const descTranslate = (desc) => {
    return desc.length > 80 ? desc.substring(0, 80) + "..." : desc;
  };

  const titleTranslate = (title) => {
    return title.length > 45 ? title.substring(0, 45) + "..." : title;
  };

  if (loading) {
    return (
      <div className="flex justify-center">
        <TailSpin heigth="50" width="50" color="grey" ariaLabel="loading" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-3">
      {news?.value?.slice(0, slice).map((news, i) => (
        <a key={i} href={news.url} target="_blank">
          <div className="h-auto border rounded-lg dark:border-gray-800 hover:-translate-y-1 transition duration-300 hover:shadow-xl">
            <img
              src={
                news?.image?.thumbnail?.contentUrl ||
                "https://pertaniansehat.com/v01/wp-content/uploads/2015/08/default-placeholder.png"
              }
              className="bg-cover w-full h-48 rounded-t-lg"
            />
            <div className="p-2 space-y-2">
              <h1 className="font-semibold text-lg leading-5">
                {titleTranslate(news.name)}
              </h1>
              <h1 className="font-medium text-md leading-5">
                {descTranslate(news.description)}
              </h1>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default News;
