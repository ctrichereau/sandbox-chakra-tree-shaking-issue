import type { ComponentStyleConfig } from '@chakra-ui/theme'

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
export const Input: ComponentStyleConfig = {
  variants: {
    placeholderImageHero: {
      field: {
        color: '#757575',

        fontWeight: '300',
        lineHeight: '1.25rem',
        fontSize: '1rem',
        borderBottom: '1px solid #E5E5E5',
        borderRadius: '0',
        focusBorderColor: 'none'
      }
    },

    placeholderFooter: {
      field: {
        color: '#757575',
        lineHeight: '1.375rem',
        fontSize: '1rem',
        borderBottom: '1px solid #E5E5E5',
        _placeholder: {
          color: '#757575'
        }
      }
    }
  }
}
