import { Badge } from "@chakra-ui/react";
import type { Props } from "./ui/color-mode";

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge
      fontSize={"14px"}
      paddingX="5px"
      borderRadius={4}
      colorPalette={color}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
