/* eslint-disable react/jsx-wrap-multilines */
// import products from 'src/__mocks__/products';
import {
  Box,
  // Button,
  Card,
  CardContent,
  CardHeader,
  CardActionArea,
  CardMedia,
  Divider,
  Typography,
  Grid
} from '@material-ui/core';
// import ArrowRightIcon from '@material-ui/icons/ArrowRight';
// import ProductCard from '../product/ProductCard';

// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const NumLocalListings = (props) => {
  console.log('Hello');
  return (
    <Card {...props}>
      <CardHeader
        // action={
        //   <Button endIcon={<ArrowDropDownIcon />} size="small" variant="text">
        //     Last 7 days
        //   </Button>
        // }
        title="Local Listings"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            // height: 200,
            position: 'relative'
          }}
        >
          <Box sx={{ pt: 3 }}>
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
                      <h1>Hello World</h1>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              {/* {products.map((product) => (
                <Grid item key={product.id} lg={4} md={6} xs={12}>
                  <ProductCard product={product} />
                </Grid>
              ))} */}
            </Grid>
          </Box>
        </Box>
      </CardContent>
      <Divider />
      <Box
        sx={{
          // height: 200,
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
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
      </Box>
    </Card>
  );
};

export default NumLocalListings;
