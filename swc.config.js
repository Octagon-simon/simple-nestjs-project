const config = {
  jsc: {
    parser: {
      syntax: 'typescript',
      tsx: true,
      dynamicImport: true,
      decorators: true,
      decoratorsBeforeExport: true,
    },
    transform: {
      legacyDecorator: true,
    },
  },
  module: {
    type: 'module',
  },
};

export default config;
