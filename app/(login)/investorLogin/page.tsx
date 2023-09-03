import { LoginPage } from "@/app/components";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <LoginPage
        name="Investor Name"
        extraDetails={[
          "Name of the Investor",
          "Solo or Organization",
          "Type of Investor",
        ]}
        typeOfAccount="INVESTOR"
      />
    </>
  );
};

export default page;
