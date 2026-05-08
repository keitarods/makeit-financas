"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ClientOnlyChart({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  if (!mounted) {
    return <div aria-hidden="true" className={className} />;
  }

  return <div className={className}>{children}</div>;
}
