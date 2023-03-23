import { Box, Grid, useTheme } from "@mui/material";
import SaaSCard from "components/Dashboards/saas/Card";
import RecentOrders from "components/Dashboards/saas/RecentOrders";
import TopSelling from "components/Dashboards/saas/TopSelling";
import useTitle from "hooks/useTitle";
import BucketIcon from "icons/BucketIcon";
import EarningIcon from "icons/EarningIcon";
import PeopleIcon from "icons/PeopleIcon";
import { FC } from "react";

const SaaS: FC = () => {
  // change navbar title
  useTitle("E-Library Admin Dashboard");

  const theme = useTheme();

  const cardList = [
    {
      price: 574,
      Icon: BucketIcon,
      title: "Total Book Loan",
      color: theme.palette.primary.main,
    },
    {
      price: 521,
      title: "Total Book",
      Icon: EarningIcon,
      color: theme.palette.primary.purple,
    },
    // {
    //   price: 684,
    //   Icon: WindowsLogoIcon,
    //   title: "Weekly revenue",
    //   color: theme.palette.primary.red,
    // },
    {
      price: 321,
      Icon: PeopleIcon,
      title: "Total Member",
      color: theme.palette.primary.yellow,
    },
  ];

  return (
    <Box pt={2} pb={4}>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {cardList.map((card, index) => (
          <Grid item lg={3} xs={6} key={index}>
            <SaaSCard card={card} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4} pt={4}>
        <Grid item lg={8} md={7} xs={12}>
          <RecentOrders />
        </Grid>
        <Grid item lg={4} md={5} xs={12}>
          <TopSelling />
        </Grid>

        {/* <Grid item xs={12}>
          <Footer imageLink="/static/illustration/sass-dashboard.svg" />
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default SaaS;
