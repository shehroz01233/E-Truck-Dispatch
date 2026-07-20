import type { ReactNode } from "react";
import DispatchTechnologyGridSection, {
  type DispatchTechnologyCard,
} from "./DispatchTechnologyGridSection";

type DryVanGettingStartedSectionProps = {
  heading: ReactNode;
  image: string;
  imageAlt: string;
  cards: DispatchTechnologyCard[];
};

export default function DryVanGettingStartedSection({
  heading,
  image,
  imageAlt,
  cards,
}: DryVanGettingStartedSectionProps) {
  return (
    <DispatchTechnologyGridSection
      heading={heading}
      image={image}
      imageAlt={imageAlt}
      cards={cards}
    />
  );
}
