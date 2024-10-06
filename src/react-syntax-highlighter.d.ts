declare module 'react-syntax-highlighter' {
  import { ComponentType } from 'react';

  export const Prism: ComponentType<any>;
  export const Light: ComponentType<any>;
  export const Dark: ComponentType<any>;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
  const styles: any;
  export default styles;
}

declare module 'react-syntax-highlighter/dist/cjs/index' {
  const SyntaxHighlighter: any;
  export default SyntaxHighlighter;
}
