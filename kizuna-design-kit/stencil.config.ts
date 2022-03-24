import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import { inlineSvg } from 'stencil-inline-svg';

export const config: Config = {
  namespace: 'kizunakit',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    react({
      componentCorePackage: 'kizuna-design-kit',
      proxiesFile:
        '../kizuna-react-kit/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [inlineSvg()],
};
