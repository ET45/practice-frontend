import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchSpace from "../../store/spaces/actions";
import { selectSpaces, selectLoading } from "../../store/spaces/selectors";
import { Link } from "react-router-dom";

export default function Homepage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpace);
  }, []);

  const spaces = useSelector(selectSpaces);
  /* console.log("spaces", spaces); */
  const loading = useSelector(selectLoading);
  /*  console.log("loading", loading);
   */
  return (
    <div>
      {loading
        ? "Loading"
        : spaces
            .sort((a, b) => b.createdAt - a.createdAt)
            .map((space) => {
              return (
                <div
                  key={space.id}
                  style={{
                    backgroundColor: space.backgroundColor,
                    color: space.color,
                  }}
                >
                  <h3>{space.title}</h3>
                  <p>{space.description}</p>
                  <Link to={`/space/${space.id}`}>
                    <button>Visit Space</button>
                  </Link>
                </div>
              );
            })}
    </div>
  );
}
