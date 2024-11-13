import React from "react";

type Props = {
  children: React.ReactNode;
  variant: "left" | "right" | "top" | "bottom";
};

const Spacer = ({ children, variant }: Props) => {
  return <div className={`spacer-${variant}`}>{children}</div>;
};

export default Spacer;
