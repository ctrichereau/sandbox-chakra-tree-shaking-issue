import type { ComponentStyleConfig } from '@chakra-ui/theme'

export const Tabs: ComponentStyleConfig = {
  variants: {
    tabsSeo: {
      tablist: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: { base: '0px', md: '30px' },
        width: '100%',
        overflowX: 'auto',
        px: { base: '6', md: '0' },
        pb: { base: '6', md: '0' }
      },
      tab: {
        h: '30px',
        w: '122px',
        px: '10px',
        py: '8px',
        bg: '#fff',
        color: 'brand.black',
        textTransform: 'uppercase',
        fontWeight: '400',
        fontSize: '14px',
        cursor: 'pointer',
        _selected: {
          bg: 'brand.black',
          color: '#fff',
          _hover: {
            bg: 'brand.black'
          }
        },
        _hover: {
          bg: 'brand.gray.200'
        }
      },
      tabpanel: {
        p: '0'
      }
    }
  }
}
