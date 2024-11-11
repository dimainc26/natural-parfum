import React from "react";

type Props = {
  children: React.ReactNode;
  variant: "left" | "right";
};

const Spacer = ({ children, variant }: Props) => {
  return (
    <div className={variant === "left" ? "spacer-left" : "spacer-right"}>
      {children}
    </div>
  );
};

export default Spacer;
