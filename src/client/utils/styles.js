import {createMuiTheme} from '@material-ui/core/styles'

// Colors
export const colors =  {
    primary: {
        main: '#2B9D13',   // '#187f18', // - might use this in the future // former - #2BAD13
        lightmain: '#2B9D13',
    },
    secondary: {
        dark: '#444b54'
    }, 
    status: {
        danger: '#DC3545',
        info: '#3399FF',
        success: '#28A745',
        warning: '#FFC107',
    }, 
    neutral: {
        charcoal: '#333',
        dark: '#666',
        stone: '#999',
        rock: '#aaa',
        mist: '#ccc',
        cloud:'#eee',
        river:'#f5f5f5',
        white:'#fff',
    }
}
  

export const contentPadding = '160px';
export const contentAuthPadding = '320px';
export const border1 = `${colors.neutral.rock} 1px solid`;
export const border2 = `${colors.neutral.rock} 2px solid`;

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: colors.primary.main
        }, 
        secondary: {
            main: colors.primary.main
        },
        text: {
            primary: colors.neutral.charcoal,
            secondary: colors.neutral.stone
        }
    },
    typography: {
        fontFamily: [
            'Source Sans Pro',
            'sans-serif'
        ].join(','),
        h1: {
            fontSize: '2rem',
            fontWeight: 'normal',
            lineHeight: '1.3'
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 'normal',
            lineHeight: '1.3'
        },
        h3: {
            fontSize: '1.125rem',
            fontWeight: 'normal'
        },
        h4: {
            fontSize: '1.125rem',
            fontWeight: 'bold',
        },
        h5: {
            fontSize: '1.125rem',
            lineHeight: '1.5'
        },
        subtitle1: {
            fontSize: '1.25rem',
            fontWeight: 'normal',
        },
        subtitle2: {
            fontSize: '1.25rem',
            fontWeight: 'bold',
        },
        body1: {
            fontSize: '1rem',
        },
        body2: {
            fontSize: '1rem',
            fontWeight: 'bold',
        },
        caption: {
            fontSize: '0.875rem'
        }
    },
    overrides: {}
})