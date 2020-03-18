import React from "react";
import Item from "@material-ui/core/MenuItem";
import { RouteComponentProps, withRouter } from "react-router-dom";

type IProps = {
  title: string;
  targetUrl: string;
  onClick: () => void;
};

const MenuItem: React.FC<IProps & RouteComponentProps> = props => {
  const transition = () => {
    const { history, targetUrl, onClick } = props;
    history.push(targetUrl);
    window.scrollTo(0, 0);
    onClick();
  };

  return <Item onClick={transition}>{props.title}</Item>;
};

export default withRouter(MenuItem);
