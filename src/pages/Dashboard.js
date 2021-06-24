import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import AvgPriceOfHomes from 'src/components/dashboard/AvgPriceOfHomes';
import MessageCenter from 'src/components/dashboard/MessageCenter';
import SellerChecklist from 'src/components/dashboard/SellerChecklist';
import TasksProgress from 'src/components/dashboard//TasksProgress';
import TotalCustomers from 'src/components/dashboard//TotalCustomers';
import TotalProfit from 'src/components/dashboard//TotalProfit';
// import NumLocalListings from 'src/components/dashboard/NumLocalListings';
import LocalListings from 'src/components/dashboard/LocalListings';
// import TrafficByDevice from 'src/components/dashboard//TrafficByDevice';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TotalCustomers />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <AvgPriceOfHomes />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TasksProgress />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid item lg={12} md={12} xl={12} xs={12}>
            {/* <NumLocalListings /> */}
            <LocalListings />
          </Grid>
          {/* <Grid item lg={4} md={6} xl={3} xs={12}>
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid> */}
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <SellerChecklist sx={{ height: '100%' }} />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <MessageCenter />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
