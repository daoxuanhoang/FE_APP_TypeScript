import { SxProps, Theme } from "@mui/material";

export interface IActivity {
  color: string;
  containerStyle?: ISXTheme;
}

export type ISXTheme = SxProps<Theme>;
