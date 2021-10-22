import { useParams } from "react";
import { fetchOnePost, selectOnePost } from "./onePostSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function OnePostContainer() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const post = useSelector(selectOnePost);
  const refresh = () => dispatch(fetchOnePost(id));
  useEffect(refresh, [id, dispatch]);

  return <div>hi</div>;
}

export default OnePostContainer;
