import React from "react";

export default function Icon(icon) {
  return <div dangerouslySetInnerHTML={{ __html: icon }}></div>;
}
