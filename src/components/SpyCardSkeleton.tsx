import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function SpyCardSkeleton() {
  return (
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="rectangular" width={"100%"} height={386} />
      <Skeleton variant="rectangular" width={"100%"} height={60} />
      <Skeleton variant="rectangular" width={"100%"} height={60} />
    </Stack>
  );
}
