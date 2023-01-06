import type { ComponentStyleConfig } from '@chakra-ui/theme'

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
export const Button: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: '400',
    fontSize: '1rem',
    lineHeight: '1rem',
    textTransform: 'uppercase',
    borderRadius: 'none'
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3 // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: 'md',
      px: 12, // <-- these values are tokens from the design system
      py: 4 // <-- these values are tokens from the design system
    }
  },
  variants: {
    primary: {
      color: 'brand.white',
      backgroundColor: 'brand.black',
      border: '1px',
      borderColor: 'brand.black',
      _hover: {
        _disabled: {
          bgColor: 'brand.black'
        }
      }
    },
    secondary: {
      backgroundColor: 'brand.white',
      color: 'brand.black',
      border: '1px',
      borderColor: 'brand.black',
      _hover: {
        _disabled: {
          bgColor: 'brand.white'
        }
      }
    },
    iconButton: {
      backgroundColor: 'transparent',
      border: 'none',
      transition: '1s all ease-in',
      _hover: {
        backgroundColor: 'transparent'
      }
    },
    select: {
      padding: 0,
      width: '100%',
      minWidth: 'none',
      textAlign: 'left',
      backgroundColor: 'brand.white',
      color: 'brand.black',
      borderBottom: '1px',
      borderColor: 'brand.black',
      fontWeight: '600',
      lineHeight: '1.25rem',
      fontSize: '1rem',
      paddingInlineStart: '0'
    }
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'primary'
  }
}
