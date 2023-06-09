/** @format */

import React, { memo, useMemo } from "react";
// import { Bounce } from 'react-activity';
// import "react-activity/dist/library.css";
// import { IActivity, ISXTheme } from 'types';

import createStyle from "./styles";
import { Grid } from "@mui/material";
import { areEqual, getDataType } from "../../utils";
import { IActivity, ISXTheme } from "../../types/component";

function ActivityIndicator({ color, containerStyle, ...props }: IActivity) {
  const styles = createStyle();

  const wrapStyles = useMemo(
    () =>
      getDataType(containerStyle) === "Array"
        ? [styles.default, ...(containerStyle as any[])]
        : [styles.default, { ...containerStyle }],
    [containerStyle]
  ) as ISXTheme;

  return (
    <Grid sx={wrapStyles}>
      {/* <Bounce color={color || styles.default.color} {...props} /> */}
    </Grid>
  );
}
export default memo(ActivityIndicator, areEqual);
