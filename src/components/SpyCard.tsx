import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SpyCardSkeleton from "./SpyCardSkeleton";

interface SpyCardProps {
  isLoading: boolean;
  spyData: spy;
}
export default function SpyCard({ isLoading = false, spyData }: SpyCardProps) {
  const { name, picture } = spyData || { name: {} };
  return (
    <Card sx={{ maxWidth: "100%" }}>
      {isLoading ? (
        <SpyCardSkeleton />
      ) : (
        <>
          <CardMedia sx={{ height: 386 }} image={picture?.large} title={""} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </>
      )}
    </Card>
  );
}
