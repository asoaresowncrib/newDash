import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  // LinearProgress,
  Typography
} from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
// import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';

const TasksProgress = (props) => (
  <Card sx={{ height: '100%' }} {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="h6">
            LOCAL LISTINGS
          </Typography>
          <Typography color="textPrimary" variant="h3">
            479
            {/* 75.5% */}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: orange[600],
              height: 56,
              width: 56
            }}
          >
            <HomeIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box sx={{ pt: 3 }}>
        {/* <LinearProgress value={75.5} variant="determinate" /> */}
        <Typography color="textSecondary" variant="caption">
          <Link href="#" color="textSecondary">
            See More
          </Link>
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default TasksProgress;
