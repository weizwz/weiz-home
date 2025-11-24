import { HydratedRouter } from "react-router/dom";
import { startTransition, StrictMode, useState } from "react";
import { hydrateRoot } from "react-dom/client";
import { StyleProvider, createCache } from "@ant-design/cssinjs";
import "@ant-design/v5-patch-for-react-19";

function Client() {
  const [cache] = useState(() => createCache());
  return (
    <StyleProvider cache={cache}>
      <HydratedRouter />
    </StyleProvider>
  );
}

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <Client />
    </StrictMode>
  );
});
