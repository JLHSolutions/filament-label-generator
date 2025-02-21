import LabelPreset from '@/types/LabelPreset'

const presets: { [key: string]: LabelPreset | 'spacer' } = {
    /* Blank/Starter preset */
    'Default': {
        text: {
            brand: '',
            type: '',
            diameter: '',
            temp: ''
        },
        graphics: {
            logo: 'Bambu Lab'
        }
    },

    /* Bambu Lab */
    '': 'spacer',
    '⸻ Bambu Lab ⸻': 'spacer',
    
    'Bambu PLA Basic': {
        text: {
            brand: 'Bambu',
            type: 'PLA Basic',
            diameter: '1.75 ± 0.03 mm',
            temp: '190-220'
        },
        graphics: {
            logo: 'Bambu Lab'
        }
    },
    'Bambu PLA Silk': {
        text: {
            brand: 'Bambu',
            type: 'PLA Silk',
            diameter: '1.75 ± 0.03 mm',
            temp: '210-230'
        },
        graphics: {
            logo: 'Bambu Lab'
        }
    },
    'Bambu PETG Basic': {
        text: {
            brand: 'Bambu',
            type: 'PETG Basic',
            diameter: '1.75 ± 0.03 mm',
            temp: '230-260'
        },
        graphics: {
            logo: 'Bambu Lab'
        }
    },


    /* SUNLU */
    ' ': 'spacer',
    '⸻ SUNLU ⸻': 'spacer',

    'SUNLU PLA Matte': {
        text: {
            brand: 'SUNLU',
            type: 'PLA Matte',
            diameter: '1.75 ± 0.02 mm',
            temp: '190-220'
        },
        graphics: {
            logo: 'SUNLU'
        }
    },
    'SUNLU PETG': {
        text: {
            brand: 'SUNLU',
            type: 'PETG',
            diameter: '1.75 ± 0.02 mm',
            temp: '220-250'
        },
        graphics: {
            logo: 'SUNLU'
        }
    },

    /* JAYO */
    '  ': 'spacer',
    '⸻ JAYO ⸻': 'spacer',

    'JAYO PLA+': {
        text: {
            brand: 'JAYO',
            type: 'PLA+',
            diameter: '1.75 ± 0.02 mm',
            temp: '210-235'
        },
        graphics: {
            logo: 'JAYO'
        }
    },

    /* Eryone */
    '   ': 'spacer',
    '⸻ Eryone ⸻': 'spacer',

    'Eryone PLA Silk': {
        text: {
            brand: 'Eryone',
            type: 'PLA Silk',
            diameter: '1.75 ± 0.03 mm',
            temp: '190-220'
        },
        graphics: {
            logo: 'Eryone'
        }
    },
    'Eryone TPU 95A': {
        text: {
            brand: 'Eryone',
            type: 'TPU 95A',
            diameter: '1.75 ± 0.05 mm',
            temp: '190-220'
        },
        graphics: {
            logo: 'Eryone'
        }
    }
}

export default presets
