import type { ComponentStyleConfig } from '@chakra-ui/theme'

export const Checkbox: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    control: {
      borderColor: '#757575',
      borderRadius: 'none',
      _checked: {
        bg: 'brand.black',
        borderColor: 'brand.black',
        borderRadius: 'none',
        _hover: {
          bg: 'brand.black',
          borderColor: 'brand.black',
          borderRadius: 'none'
        }
      }
    }
  },
  variants: {
    primary: {}
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'primary'
  }
}
