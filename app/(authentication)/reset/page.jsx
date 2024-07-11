"use client";

import { Box, Typography, Stack, Card, Grid } from "@mui/material";
import Link from "next/link";
import Logo from "../../components/Logo";
import AuthReset from "../auth/AuthReset";

const Reset = () => {
  return (
    <Box
      sx={{
        position: "relative",
        "&:before": {
          content: '""',
          background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite",
          position: "absolute",
          height: "100%",
          width: "100%",
          opacity: "0.3",
        },
      }}
    >
      <Grid
        container
        spacing={0}
        justifyContent="center"
        sx={{ height: "100vh" }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          lg={4}
          xl={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Card
            elevation={9}
            sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
          >
            <Box display="flex" alignItems="center" justifyContent="center">
              <Logo
                src="/images/logo.png"
                width={30}
                height={30}
                title="NurseryVision"
              />
            </Box>
            <AuthReset
              subtext={
                <Typography
                  variant="subtitle1"
                  textAlign="center"
                  color="textSecondary"
                  mb={1}
                >
                  Please enter the email address associated with your account.
                </Typography>
              }
              subtitle={
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                  mt={3}
                >

                  <Typography
                    color="textSecondary"
                    variant="h6"
                    fontWeight="500"
                  >
                    Remember your password?
                  </Typography>
                  <Typography
                    component={Link}
                    href="/"
                    fontWeight="500"
                    sx={{
                      textDecoration: "none",
                      color: "primary.main",
                    }}
                  >
                    Sign In
                  </Typography>
                </Stack>
              }
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Reset;
