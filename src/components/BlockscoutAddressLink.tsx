import { useContractKit } from "@celo-tools/use-contractkit";
import React from "react";
import { Link } from "theme-ui";

export const BlockscoutAddressLink: React.FC<{
  address: string;
}> = ({ address, children }) => {
  const { network } = useContractKit();
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={`${network.explorer}/address/${address}`}
      style={{ textDecoration: "none" }}
    >
      {children}
    </Link>
  );
};
