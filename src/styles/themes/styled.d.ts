import type Dark from './dark';

declare module 'styled-components' {
  type CustomTheme = typeof Dark;
  export interface DefaultTheme extends CustomTheme {}
}
