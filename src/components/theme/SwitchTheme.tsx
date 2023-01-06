import type { ComponentStyleConfig } from '@chakra-ui/theme'

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
export const Switch: ComponentStyleConfig = {
  // The styles all button have in common
  variants: {
    primary: {
      container: {
        span: {
          backgroundColor: 'white',
          borderColor: 'brand.black',
          border: '1px',
          display: 'flex',
          alignItems: 'center',
          _disabled: {
            cursor: 'default',
            borderColor: 'brand.gray.600',
            span: {
              backgroundColor: 'brand.gray.600',
              borderColor: 'brand.gray.600'
            }
          },
          _checked: {
            backgroundColor: 'white',
            justifyContent: 'flex-end'
          },
          span: {
            backgroundColor: 'black',
            width: '5px',
            height: '5px',
            '--switch-track-diff': '0',
            '--switch-thumb-x': '0',
            _checked: {
              backgroundColor: 'black'
            }
          }
        }
      }
    },
    secondary: {
      container: {
        span: {
          backgroundColor: 'white',
          borderColor: '#757575',
          border: '1px solid #757575',
          display: 'flex',
          alignItems: 'center',
          _disabled: {
            cursor: 'default',
            borderColor: 'brand.gray.600',
            span: {
              backgroundColor: 'brand.gray.600',
              borderColor: 'brand.gray.600'
            }
          },
          _checked: {
            backgroundColor: 'white',
            justifyContent: 'flex-end'
          },
          span: {
            backgroundColor: '#757575',
            width: '5px',
            height: '5px',
            '--switch-track-diff': '0',
            '--switch-thumb-x': '0',
            _disabled: {
              cursor: 'default',
              opacity: '0.3',
              border: '1px solid brand.gray.600'
            },
            _checked: {
              backgroundColor: '#757575'
            }
          }
        }
      }
    }
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'secondary'
  }
}
