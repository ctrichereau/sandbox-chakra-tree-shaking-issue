import type { ComponentStyleConfig } from '@chakra-ui/theme'

export const Tag: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    container: {
      fontWeight: '400',
      fontSize: '1rem',
      lineHeight: '0.625rem',
      border: '1px solid',
      borderColor: 'brand.gray.500',
      borderRadius: 'none',
      color: 'brand.blackGray'
    }
  },
  sizes: {
    sm: {
      container: {
        fontWeight: '400',
        fontSize: '1rem',
        lineHeight: '0.625rem',
        border: '1px solid',
        borderColor: 'brand.gray.500',
        borderRadius: 'none',
        color: 'brand.blackGray'
      }
    }
  },
  variants: {
    primary: {
      container: {
        padding: '3',
        _hover: {
          color: 'brand.black',
          fontWeight: '400',
          border: '1px solid',
          borderColor: 'brand.black',
          padding: '3'
        }
      }
    },
    secondary: {
      container: {
        color: 'brand.black',
        fontWeight: '400',
        border: '1px solid',
        borderColor: 'brand.black',
        padding: '3',
        _hover: {
          color: 'brand.black',
          fontWeight: '400',
          border: '1px solid',
          borderColor: 'brand.black',
          padding: '3'
        }
      }
    },
    searchTag: {
      container: {
        fontWeight: '300',
        fontSize: '0.875rem',
        lineHeight: '0.875rem',
        color: 'brand.black',
        border: 'none',
        borderRadius: 'full',
        bg: '#F3F3F3'
      }
    }
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'primary'
  }
}
