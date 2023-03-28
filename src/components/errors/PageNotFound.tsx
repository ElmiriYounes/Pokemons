import React, { FC } from "react";
import { NotFoundImg, NotFoundWrap } from "./PageNotFound.style";
import image404 from "../../assets/images/png/error-404.png";

const PageNotFound: FC = () => {
  return (
    <NotFoundWrap>
      <NotFoundImg src={image404} alt="404: Oops page not found" />
    </NotFoundWrap>
  );
};

export default PageNotFound;
