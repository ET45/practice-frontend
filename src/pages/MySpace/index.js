import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { selectSpacetoStory } from "../../store/spacePage/selectors";

export default function MySpace() {
  const spaceDetails = useSelector(selectSpacetoStory);
  console.log("space details", spaceDetails);

  const token = useSelector(selectToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);
  return !spaceDetails ? (
    <div> Loading</div>
  ) : (
    <div>
      <h1>detail page</h1>
      <div>
        <h3>{spaceDetails.title}</h3>

        {spaceDetails.stories.map((cont) => {
          return (
            <div key={cont.id}>
              <h4>{cont.name}</h4>
              <p>{cont.content}</p>
              <img src={cont.imageUrl} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
