import type { ComponentStyleConfig } from '@chakra-ui/theme'

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
export const Text: ComponentStyleConfig = {
  variants: {
    linkTheme: {
      fontWeight: '600',
      fontSize: '0.875rem',
      lineHeight: '0.875rem',
      textTransform: 'uppercase',
      textDecoration: 'none',
      borderBottom: { base: '1px solid black', md: '1px solid #E5E5E5' },
      paddingBottom: '1',
      cursor: 'pointer',
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
      fontWeight: '300',
      textTransform: 'none',
      borderBottom: { base: '1px solid white', md: '1px solid white' },
      _hover: {
        textDecoration: 'none',
        borderBottom: '1px solid',
        borderColor: 'brand.black'
      }
    },
    phoneNumber: {
      fontSize: '0.875rem',
      lineHeight: '1rem',
      fontWeight: '600',
      color: '#fff',
      wordBreak: 'normal',
      whiteSpace: 'nowrap'
    },
    selectPlaceholder: {
      fontWeight: '600',
      lineHeight: '0.625rem',
      fontSize: '0.438rem',
      color: 'brand.black',
      textTransform: 'uppercase'
    },
    filterTitle: {
      mt: '8 !important',
      mb: '4 !important',
      fontSize: '1rem',
      lineHeight: '1.25rem',
      fontWeight: '600'
    },
    cardTitle: {
      fontWeight: '600',
      lineHeight: '1.8rem',
      fontSize: '1.25rem'
    },
    cardSubtitle: {
      fontWeight: '300',
      lineHeight: '1.375rem',
      fontSize: '1rem'
    },
    searchCardCountry: {
      fontSize: '1rem',
      lineHeight: '1.25rem',
      fontWeight: '300'
    },
    searchCardName: {
      fontSize: '1rem',
      lineHeight: '1.25rem',
      fontWeight: '600'
    },
    buttonLabel: {
      fontWeight: '400',
      fontSize: '1rem',
      lineHeight: '1rem'
    },
    searchCardSubName: {
      fontSize: '0.75rem',
      lineHeight: '1.25rem',
      fontWeight: '400'
    },
    searchCardSmallText: {
      fontSize: '0.5rem',
      lineHeight: '1.25rem',
      fontWeight: '400',
      whiteSpace: 'nowrap'
    },
    searchCardPrice: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      fontWeight: '600',
      whiteSpace: 'nowrap'
    },
    searchCardDevise: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      fontWeight: '300',
      whiteSpace: 'nowrap'
    },
    placeholder: {
      fontWeight: '300',
      lineHeight: '1.25rem',
      fontSize: '1rem'
    },
    subtitleLight: {
      fontWeight: '300',
      lineHeight: '1.25rem',
      fontSize: '1.1rem',
      textTransform: 'none'
    },
    subtitleBold: {
      fontWeight: '600',
      lineHeight: '1.25rem',
      fontSize: '1.1rem',
      textTransform: 'none'
    },
    secondaryTitle: {
      fontSize: { base: '1rem', md: '1.5rem' },
      fontWeight: '600',
      lineHeight: { base: '1rem', md: '1.5rem' },
      color: 'brand.black'
    },
    titlePlaceholderMobile: {
      fontSize: '0.638rem',
      lineHeight: '0.725rem',
      fontWeight: '600',
      color: 'brand.black'
    },
    searchEnteteJostSemibold: {
      fontSize: '1.25rem',
      fontWeight: '600',
      lineHeight: '1.5rem',
      color: 'brand.black'
    },
    guestsCounterTitle: {
      fontSize: '1.15rem',
      fontWeight: '300',
      lineHeight: '1.5rem'
    },
    guestsCounterSubtitle: {
      fontSize: '1rem',
      fontWeight: '300',
      lineHeight: '1.5rem'
    },
    guestsCounter: {
      fontSize: '1.15rem',
      fontWeight: '600',
      lineHeight: '1.65rem'
    },
    filterButton: {
      textTransform: 'uppercase',
      fontWeight: '400',
      fontSize: '0.875rem',
      lineHeight: '0.875rem'
    }
  }
}
