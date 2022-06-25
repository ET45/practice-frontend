import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import fetchSpace from "../../store/spacePage/actions";
import { selectSpacetoStory } from "../../store/spacePage/selectors";

export default function DetailPage() {
  const { id } = useParams();
  /* console.log("params", id); */
  const dispatch = useDispatch();
  const story = useSelector(selectSpacetoStory);

  useEffect(() => {
    dispatch(fetchSpace(id));
  }, []);

  return !story ? (
    <div> Loading</div>
  ) : (
    <div
      key={story.id}
      style={{ backgroundColor: story.backgroundColor, color: story.color }}
    >
      <h1>detail page</h1>
      <div>
        <h3>{story.title}</h3>

        {story.stories.map((cont) => {
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
