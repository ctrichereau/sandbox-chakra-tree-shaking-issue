import type { ComponentStyleConfig } from '@chakra-ui/theme'

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
export const Heading: ComponentStyleConfig = {
  variants: {
    'diptyque-jost': {
      fontSize: { base: '3rem', sm: '3.5rem', lg: '4.5rem', xl: '6rem', '2xl': '8rem' },
      lineHeight: { base: '3rem', sm: '3.5rem', lg: '4.5rem', xl: '6rem', '2xl': '8rem' },
      fontWeight: '600'
    },
    'diptyque-taviraj': {
      fontSize: { base: '3rem', sm: '3.5rem', lg: '4.5rem', xl: '6rem', '2xl': '8rem' },
      lineHeight: { base: '3rem', sm: '3.5rem', lg: '4.5rem', xl: '6rem', '2xl': '8rem' },
      fontFamily: 'Taviraj',
      fontWeight: '300'
    },
    'secondary-title-jost-semibold': {
      fontSize: { base: '3rem', sm: '3.5rem', md: '5.313rem' },
      fontWeight: '600',
      lineHeight: { base: '3.25rem', md: '5.313rem' },
      color: 'brand.black'
    },
    'secondary-subtitle-jost-semibold': {
      fontSize: { base: '1rem', sm: '1.25rem', md: '1.5rem' },
      fontWeight: '600',
      lineHeight: { base: '1rem', sm: '1.25rem', md: '1.5rem' },
      color: 'brand.black'
    },
    'secondary-title-jost-light': {
      fontSize: { base: '1rem', md: '1.25rem', '2xl': '2rem' },
      lineHeight: { base: '1.25rem', md: '1.375rem', '2xl': '2.5rem' },
      fontWeight: '300',
      color: 'brand.white'
    },
    'tertiary-subtitle-jost-semibold': {
      fontSize: { base: '1rem' },
      fontWeight: '600',
      lineHeight: { base: '125%' },
      color: 'brand.black',
      letterSpacing: { base: '-0.03em' }
    },
    'tertiary-subtitle-jost-light': {
      fontSize: { base: '1rem' },
      fontWeight: '300',
      color: 'brand.black',
      lineHeight: { base: '1.375rem' }
    },
    'quaternary-subtitle-jost-semibold': {
      fontSize: { base: '0,75rem' },
      fontWeight: '600',
      lineHeight: { base: '125%' },
      color: 'brand.black',
      letterSpacing: { base: '-2%' }
    },
    'search-entete-jost-semibold': {
      fontSize: '1.25rem',
      fontWeight: '600',
      lineHeight: '1.5rem',
      color: 'brand.black'
    },
    'catch-phrase-jost': {
      fontSize: { base: '1.3rem', md: '3.75rem' },
      fontWeight: '600',
      lineHeight: { base: '1.3rem', md: '3.75rem' },
      color: 'brand.black'
    },
    'catch-phrase-taviraj': {
      fontSize: { base: '1.3rem', md: '3.75rem' },
      fontFamily: 'Taviraj',
      fontWeight: '300',
      lineHeight: { base: '1.3rem', md: '3.75rem' },
      color: 'brand.black'
    },
    'small-title-jost': {
      textTransform: 'uppercase',
      fontSize: '0.5rem',
      fontWeight: '600',
      lineHeight: '0.625rem',
      color: 'brand.black'
    },
    'medium-title-jost': {
      textTransform: 'capitalize',
      fontSize: '1.25rem',
      fontWeight: '600',
      color: 'brand.blue',
      margin: '0'
    },
    'push-title': {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: 'brand.black',
      lineHeight: '1.8rem'
    }
  },
  // The default size and variant values
  defaultProps: {
    size: '5.313rem',
    variant: 'secondary-title-jost-light'
  }
}
