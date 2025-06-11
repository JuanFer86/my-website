/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy, type LazyExoticComponent } from "react";

type LazyImport<T extends React.ComponentType<any>> = () => Promise<{
  default: T;
}>;

type PreloadableLazyComponent<T extends React.ComponentType<any>> =
  LazyExoticComponent<T> & {
    preload: () => Promise<{ default: T }>;
  };

export function lazyPreload<T extends React.ComponentType<any>>(
  importFunc: LazyImport<T>
): PreloadableLazyComponent<T> {
  const Component = lazy(importFunc) as PreloadableLazyComponent<T>;
  Component.preload = importFunc;
  return Component;
}
