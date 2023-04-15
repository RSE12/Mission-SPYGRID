import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SpyCardSkeleton from "./SpyCardSkeleton";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface SpyCardProps {
  isLoading: boolean;
  spyData: spy;
  handleNext: () => {};
}
export default function SpyCard({
  isLoading = false,
  spyData,
  handleNext,
}: SpyCardProps) {
  const { name, picture, id, location, cell, phone, email } = spyData || {
    name: {},
  };
  return (
    <Card sx={{ maxWidth: "100%" }}>
      {isLoading ? (
        <SpyCardSkeleton />
      ) : (
        <>
          <CardMedia
            sx={{ height: 386 }}
            image={picture?.large}
            title={id?.name}
          />
          <CardContent>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={3} container direction="column">
                <Typography component="div" variant="h5">
                  {id?.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {name?.title + " " + name?.first + " " + name?.last + " "}
                </Typography>
              </Grid>
              <Grid item xs={9} container direction="column">
                <Typography component="div" variant="h5">
                  <LocationOnIcon sx={{ marginTop: "5px" }} />
                  Spy At
                </Typography>
                <Typography
                  sx={{ display: "flex", flexDirection: "column" }}
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <span>
                    {location?.street?.number + " " + location?.street?.name}
                  </span>
                  <span>{location?.state + ", " + location?.country}</span>
                  <span>{location?.postcode}</span>
                  <span>
                    {location?.timezone?.offset +
                      " " +
                      location?.timezone?.description}
                  </span>
                </Typography>
              </Grid>
              <Grid item xs={3} container direction="column">
                <Typography component="div" variant="h5">
                  Contact
                </Typography>
                <div>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {cell + " " + phone}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {email}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button size="small" onClick={handleNext}>
              Next assest
            </Button>
          </CardActions>
        </>
      )}
    </Card>
  );
}
