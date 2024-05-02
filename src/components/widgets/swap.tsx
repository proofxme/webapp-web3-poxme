import { LiFiWidget, WidgetConfig } from "@lifi/widget";

export const Swap = () => {
  const widgetConfig: WidgetConfig = {
    toChain: 56,
    toToken: "0xb469783b6b3615180da05571beec716b639cbe85",
    integrator: "Proof_of_X",
    containerStyle: {
      border: `1px solid rgb(234, 234, 234)`,
      borderRadius: "16px",
    },
  };

  return (
    <LiFiWidget config={widgetConfig} integrator={widgetConfig.integrator}/>
  );
};
