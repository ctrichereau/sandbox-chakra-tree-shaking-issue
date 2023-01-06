import type { ComponentStyleConfig } from '@chakra-ui/theme'

export const Drawer: ComponentStyleConfig = {
  variants: {
    leftPanel: {
      dialogContainer: {
        zIndex: '400'
      },
      closeButton: {
        p: '4',
        zIndex: '10',
        _hover: {
          background: 'brand.white',
          transform: 'scale(1.2) rotate(90deg)',
          opacity: '0.8',
          transition: 'all 200ms 150ms ease-in-out'
        }
      }
    },
    mobilePanel: {
      dialogContainer: {
        zIndex: '400'
      },
      closeButton: {
        zIndex: '10',
        position: 'absolute',
        top: '-1.5rem',
        left: 'calc(50% - (32px / 2))',
        p: '3',
        borderRadius: '24',
        bg: 'brand.white',
        border: '1px solid #e2e2e2'
      }
    }
  }
}
