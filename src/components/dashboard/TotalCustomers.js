import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import Link from '@material-ui/core/Link';
import ExploreIcon from '@material-ui/icons/Explore';

const TotalCustomers = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="h6">
            CURRENT LOCATION
          </Typography>
          <Typography color="textPrimary" variant="h3">
            Austin, TX
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: green[600],
              height: 56,
              width: 56
            }}
          >
            <ExploreIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 3
        }}
      >
        <Typography color="textSecondary" variant="caption">
          {/* Since last month */}
          <Link href="#" color="textSecondary">
            Change Location
          </Link>
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default TotalCustomers;
