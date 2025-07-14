import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

// This just fetches all platforms
const useAllPlatforms = () => useData<Platform>("/platforms/lists/parents");

export default useAllPlatforms;
export type { Platform };
