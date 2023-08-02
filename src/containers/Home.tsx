/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Box, FormControlLabel, Stack, Typography } from "@mui/material";

import Switch from "../components/Switch";
import { ISelectOption } from "../types/app.type";

const fields: ISelectOption[] = [
  {
    value: "none",
    label: "Aucune"
  },
  {
    value: "okr",
    label: "Objectif"
  },
  {
    value: "driver",
    label: "Drivers & Impact"
  },
  {
    value: "owner",
    label: "Owner"
  },
  {
    value: "leader",
    label: "Leader"
  },
  {
    value: "team",
    label: "Equipe"
  },
  {
    value: "role",
    label: "Rôle"
  },
  {
    value: "user",
    label: "User"
  },
  {
    value: "product",
    label: "Produit"
  },
  {
    value: "problematic",
    label: "Problématique"
  },
  {
    value: "feature",
    label: "Feature"
  },
  {
    value: "type",
    label: "Deadline"
  },
  {
    value: "dependentSubject",
    label: "Sujet avec dépendance"
  },
  {
    value: "confiance",
    label: "Confiance"
  }
];

const classes = {
  formControll: {
    "&.MuiFormControlLabel-root": {
      // backgroundColor: 'red',
    }
  }
};
const Home = () => {
  return (
    <div className="flexCenter" css={{ padding: 20 }}>
      <div className="flexCenter" css={{ width: 290 }}>
        <Stack spacing={1.6}>
          {fields.map((field: ISelectOption, index: number) => (
            // <FormControlLabel
            //   key={field.value + index}
            //   control={<Switch />}
            //   css={classes.formControll}
            //   className="flexRow spaceBetween"
            //   label={<Typography variant="h6">{field.value}</Typography>}
            // />
            <Switch key={field.value + index} />
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default Home;
