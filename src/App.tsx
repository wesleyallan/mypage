import React from 'react';
import { TempComponent } from './components/TempComponent';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Dark from './styles/themes/dark';

function App(): React.ReactElement {
  return (
    <ThemeProvider theme={Dark}>
      <GlobalStyles />
      <TempComponent />
    </ThemeProvider>
  );
}

export default App;
