import {
  //   Box,
  // Button,
  Card,
  CardContent,
  //   CardHeader,
  CardActionArea,
  CardMedia,
  //   Divider,
  Typography,
  Grid
} from '@material-ui/core';

const LocalListings = (props) => (
  <Card {...props}>
    <Grid container spacing={3}>
      <Grid item lg={4} md={6} xs={12}>
        <Card>
          <CardActionArea sx={{ border: '1px solid black' }}>
            <CardMedia
              image="/static/images/house.jpg"
              component="img"
              alt="Contemplative Reptile"
              height="150"
            />
            <CardContent>
              <Typography>Hello</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item lg={4} md={6} xs={12}>
        <Card>
          <CardActionArea sx={{ border: '1px solid black' }}>
            <CardMedia
              image="/static/images/house.jpg"
              component="img"
              alt="Contemplative Reptile"
              height="150"
            />
            <CardContent>
              <Typography>Hello</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item lg={4} md={6} xs={12}>
        <Card>
          <CardActionArea sx={{ border: '1px solid black' }}>
            <CardMedia
              image="/static/images/house.jpg"
              component="img"
              alt="Contemplative Reptile"
              height="150"
            />
            <CardContent>
              <Typography>Hello</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item lg={4} md={6} xs={12}>
        <Card>
          <CardActionArea sx={{ border: '1px solid black' }}>
            <CardMedia
              image="/static/images/house.jpg"
              component="img"
              alt="Contemplative Reptile"
              height="150"
            />
            <CardContent>
              <Typography>Hello</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item lg={4} md={6} xs={12}>
        <Card>
          <CardActionArea sx={{ border: '1px solid black' }}>
            <CardMedia
              image="/static/images/house.jpg"
              component="img"
              alt="Contemplative Reptile"
              height="150"
            />
            <CardContent>
              <Typography>Hello</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  </Card>
);

export default LocalListings;
