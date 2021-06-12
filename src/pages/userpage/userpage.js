import React from "react";
import { useSelector, useDispatch } from "react-redux";

const UserPage = () => {
  const { value: data } = useSelector((state) => state.counter);
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: data?.data?.article }} />
    </div>
  );
};

export default UserPage;
