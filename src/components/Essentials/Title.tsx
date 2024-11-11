type Props = {
  title: string;
  size?: "small" | "large" | "medium" | "normal";
  isCentered?: boolean;
};

const Title = ({ title, size, isCentered }: Props) => {
  return (
    <p className={`title ${size ?? ""} ${isCentered ? "text-center" : ""} `}>
      {title}
    </p>
  );
};

export default Title;
