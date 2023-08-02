/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Box, FormControlLabel, Stack, Typography } from "@mui/material";
import { useState } from "react";

import Switch from "../components/Switch";
import { ISelectOption } from "../types/app.type";

type ISwitchOption = {
  checked?: boolean;
} & ISelectOption;

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
      marginLeft: 0,
      marginRight: 0
    },
    "& .MuiSwitch-root ": {
      order: 2
    }
  }
};
const Home = () => {
  const [options, setOptions] = useState<ISwitchOption[]>(
    fields.map(
      (field: ISelectOption): ISwitchOption => ({ ...field, checked: false })
    )
  );

  const handleCheck = (value: string) => {
    setOptions((prev: ISwitchOption[]) => {
      const newFields = prev.map(
        (field: ISwitchOption): ISwitchOption => {
          if (value === field.value) {
            return { ...field, checked: !field.checked };
          }

          return field;
        }
      );

      return newFields;
    });
  };

  console.log("options", options);

  return (
    <div className="flexCenter" css={{ padding: 20 }}>
      <div className="flexCenter" css={{ width: 290 }}>
        <Stack spacing={1.6} className="stretchSelf">
          {options.map((field: ISelectOption, index: number) => (
            <FormControlLabel
              key={field.value + index}
              control={<Switch />}
              css={classes.formControll}
              onChange={() => handleCheck(field.value)}
              value={field.checked}
              className="flexRow spaceBetween"
              label={<Typography variant="h6">{field.label}</Typography>}
            />
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default Home;
