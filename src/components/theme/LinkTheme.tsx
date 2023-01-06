import type { ComponentStyleConfig } from '@chakra-ui/theme'

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
export const Link: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: '600',
    fontSize: '0.875rem',
    lineHeight: '0.875rem',
    textTransform: 'uppercase',
    textDecoration: 'none',
    borderBottom: { base: '1px solid black', md: '1px solid #E5E5E5' },
    paddingBottom: '1',
    cursor: 'pointer'
  },
  variants: {
    primary: {
      color: 'brand.black',
      _hover: {
        textDecoration: 'none',
        borderBottom: '1px solid',
        borderColor: 'brand.black'
      }
    },
    linkfooter: {
      cursor: 'pointer',
      color: 'brand.black',
      fontSize: '0.875rem',
      lineHeight: '0.875rem',
      borderBottom: '0',
      fontWeight: '300',
      textTransform: 'none'
    },
    deleteLink: {
      color: 'brand.blackGray',
      fontSize: '0.875rem',
      lineHeight: '0.875rem',
      borderBottom: '0',

      fontWeight: '400',
      textTransform: 'none'
    },
    navBarLink: {
      fontSize: '0.75rem',
      lineHeight: '0.75rem',
      fontWeight: '400',
      borderBottom: '0'
    }
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'primary'
  }
}
