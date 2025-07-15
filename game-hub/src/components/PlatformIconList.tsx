import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Icon, HStack } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import type { Platform } from "@/hooks/usePlatforms";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    atari: BsGlobe, // Assuming the 'Globe' icon for Atari, customize if you prefer another
    commodore: BsGlobe, // Same for Commodore / Amiga
    sega: BsGlobe, // Similarly use a placeholder for Sega
    "3do": BsGlobe, // Placeholder for 3DO
    neogeo: BsGlobe, // Placeholder for Neo Geo
    web: BsGlobe,
  };

  return (
    <HStack>
      {platforms.map(({ slug, id }) => {
        const IconComponent = iconMap[slug];
        if (!IconComponent) return null;
        return <Icon key={id} as={IconComponent} color="gray.500" />;
      })}
    </HStack>
  );
};

export default PlatformIconList;
