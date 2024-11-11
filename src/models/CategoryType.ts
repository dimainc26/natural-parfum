import type { IconType } from "react-icons";

type CategoryType = {
  id: CategoryId;
  name: string;
  icon: IconType;
};
type CategoryId = "floral" | "oriental" | "woody";

export type { CategoryId, CategoryType };
