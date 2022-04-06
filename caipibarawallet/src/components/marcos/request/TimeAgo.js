import React from "react";
import { parse, formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

export const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parse(timestamp, "dd/MM/yyyy", new Date());
    const timePeriod = formatDistanceToNow(date, { locale: es });
    timeAgo = `hace ${timePeriod}`;
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};
