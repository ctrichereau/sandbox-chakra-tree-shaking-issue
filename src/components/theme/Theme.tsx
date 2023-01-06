import { extendTheme } from '@chakra-ui/react'
import { Button } from './ButtonTheme'
import { Heading } from './HeadingTheme'
import { Text } from './TextTheme'
import { Link } from './LinkTheme'
import { Tag } from './TagTheme'
import { Input } from './InputTheme'
import { Switch } from './SwitchTheme'
import { Tabs } from './TabsTheme'
import { Drawer } from './DrawerTheme'
import { Checkbox } from './CheckboxTheme'

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Jost, sans-serif'
      },
      h2: {
        fontFamily: 'Jost',
        fontWeight: '600',
        fontSize: '1.25rem',
        lineHeight: '1.75rem',
        mb: '7'
      },
      p: {
        fontFamily: 'Jost',
        fontWeight: '300',
        fontSize: '0.875rem',
        lineHeight: '1.25rem'
      }
    }
  },
  colors: {
    brand: {
      black: '#000',
      white: '#fff',
      gray: {
        100: '#d9d9d9',
        200: '#E2E2E2',
        500: '#E5E5E5',
        600: '#E0E0E0'
      },
      blackGray: '#757575',
      lightGray: '#C4C4C4'
    }
  },
  fonts: {
    body: 'Jost, Taviraj, sans-serif',
    heading: 'Jost, Taviraj, sans-serif',
    mono: 'Jost, Taviraj, sans-serif'
  },
  size: {
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px'
    }
  },
  components: {
    Heading,
    Button,
    Text,
    Link,
    Tag,
    Input,
    Switch,
    Tabs,
    Drawer,
    Checkbox
  }
})
