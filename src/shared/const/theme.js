export const colors = {}

const light = {}

const dark = {}

export default {
  light: {
    light: true,
    colors: { ...colors, ...light },
  },
  dark: {
    light: false,
    colors: { ...colors, ...dark },
  },
}
