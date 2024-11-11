type Props = {
  text: string;
  isCentered?: boolean;
  size?: "small" | "medum" | "large";
};

const Slug = ({ text, isCentered, size }: Props) => {
  return (
    <p className={`slug ${isCentered ? "text-center" : ""} ${size ?? ""}  `}>
      {text}
    </p>
  );
};

export default Slug;
