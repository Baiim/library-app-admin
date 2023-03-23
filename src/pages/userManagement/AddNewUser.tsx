import { alpha, Box, Button, Card, Grid, styled } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import LightTextField from "components/LightTextField";
import { useFormik } from "formik";
import useTitle from "hooks/useTitle";
import { FC } from "react";
import * as Yup from "yup";

// styled components
const ButtonWrapper = styled(Box)(({ theme }) => ({
  width: 100,
  height: 100,
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.secondary[200]
      : alpha(theme.palette.primary[100], 0.1),
}));

const UploadButton = styled(Box)(({ theme }) => ({
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  border: "2px solid",
  alignItems: "center",
  justifyContent: "center",
  borderColor: theme.palette.background.paper,
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.secondary[400]
      : alpha(theme.palette.background.paper, 0.9),
}));

const SwitchWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginTop: 10,
}));

const AddNewUser: FC = () => {
  // change navbar title
  useTitle("Add New User");

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    address: "",
    zip: "",
    about: "",
  };

  const nim = [
    {
      value: "nim",
      label: "NIM",
    },
    {
      value: "nidn",
      label: "NIDN",
    },
  ];

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Name is Required!"),
    email: Yup.string().email().required("Email is Required!"),
    phone: Yup.number().min(8).required("Phone is Required!"),
    country: Yup.string().required("Country is Required!"),
    state: Yup.string().required("State is Required!"),
    city: Yup.string().required("City is Required!"),
    address: Yup.string().required("Address is Required!"),
    zip: Yup.string().required("Zip is Required!"),
    about: Yup.string().required("About is Required!"),
  });

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {},
  });

  return (
    <Box pt={2} pb={4}>
      <Card sx={{ padding: 4 }}>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <Card sx={{ padding: 3, boxShadow: 2 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item sm={6} xs={12}>
                    <LightTextField
                      fullWidth
                      name="fullName"
                      placeholder="Full Name"
                      value={values.fullName}
                      onChange={handleChange}
                      error={Boolean(touched.fullName && errors.fullName)}
                      helperText={touched.fullName && errors.fullName}
                    />
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <LightTextField
                      fullWidth
                      name="email"
                      placeholder="Email Address"
                      value={values.email}
                      onChange={handleChange}
                      error={Boolean(touched.email && errors.email)}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <LightTextField
                      fullWidth
                      name="phone"
                      placeholder="Phone Number"
                      label="Phone Number"
                      value={values.phone}
                      onChange={handleChange}
                      error={Boolean(touched.phone && errors.phone)}
                      helperText={touched.phone && errors.phone}
                    />
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <LightTextField
                      fullWidth
                      select
                      label="NIM/NIDN"
                      defaultValue={values.country}
                      onChange={handleChange}
                      error={Boolean(touched.phone && errors.phone)}
                      helperText={touched.phone && errors.phone}
                    >
                      {nim.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </LightTextField>
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <LightTextField
                      fullWidth
                      name="state"
                      placeholder="State/Region"
                      value={values.state}
                      onChange={handleChange}
                      error={Boolean(touched.state && errors.state)}
                      helperText={touched.state && errors.state}
                    />
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <LightTextField
                      fullWidth
                      name="city"
                      placeholder="City"
                      value={values.city}
                      onChange={handleChange}
                      error={Boolean(touched.city && errors.city)}
                      helperText={touched.city && errors.city}
                    />
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <LightTextField
                      fullWidth
                      name="address"
                      placeholder="Address"
                      value={values.address}
                      onChange={handleChange}
                      error={Boolean(touched.address && errors.address)}
                      helperText={touched.address && errors.address}
                    />
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <LightTextField
                      fullWidth
                      name="zip"
                      placeholder="Zip/Code"
                      value={values.zip}
                      onChange={handleChange}
                      error={Boolean(touched.zip && errors.zip)}
                      helperText={touched.zip && errors.zip}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button type="submit" variant="contained">
                      Create User
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default AddNewUser;
