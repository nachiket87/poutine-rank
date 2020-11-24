import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import ReviewForm from "./ReviewForm";
import { RouteComponentProps } from "react-router-dom";

type MyProps = RouteComponentProps<{ slug: string }>;

const Poutine: React.FC<MyProps> = ({ match }) => {
  const [poutine, setPoutine] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // api/v1/poutines/la-banquise

    const slug = match.params.slug;
    const url = `/api/v1/poutines/${slug}`;

    axios
      .get(url)
      .then((resp) => {
        setPoutine(resp.data);
        setLoaded(true);
      })
      .catch((resp) => console.log(`error ${resp}`));
  }, []);
  return (
    <div className="wrapper">
      <div className="column">
        {loaded && <Header attributes={poutine} />}
        <div className="reviews"></div>
      </div>
      <div className="column">
        <div className="review-form">
          <ReviewForm />
        </div>
      </div>
    </div>
  );
};

export default Poutine;
