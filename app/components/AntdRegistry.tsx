import { createCache, StyleProvider } from "@ant-design/cssinjs";
import { useState } from "react";

export default function AntdRegistry({ children }: { children: React.ReactNode }) {
  const [cache] = useState(() => createCache());
  return <StyleProvider cache={cache}>{children}</StyleProvider>;
}
