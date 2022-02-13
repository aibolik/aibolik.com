import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { breakpoints } from './constants';


const ThemeProvider: React.FC = ({ children }) => {

  return (
    <SCThemeProvider theme={{ breakpoints }}>
      {children}
    </SCThemeProvider>
  )
}

export { ThemeProvider };