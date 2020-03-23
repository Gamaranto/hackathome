import React from "react";
import { ReactTypeformEmbed } from "react-typeform-embed";

export default function TypeForm({ url }) {
  return <ReactTypeformEmbed url={url} className="typeform" />;
}
