import React, { useState, useEffect } from "react";
import axios from "axios";

const ReviewForm: React.FC = (props) => {
  return (
    <div>
      <form>
        <input type="text" name="title" placeholder="Review Title" />
        <input
          type="text"
          name="description"
          placeholder="Review Description"
        />
        <div className="ratingContainer">
          <div className="ratingTitleText">
            Rate this Poutine [STAR RATING COMPONENT]
          </div>
        </div>
        <button type="submit">Submit your review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
