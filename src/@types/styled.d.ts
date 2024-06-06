import 'styled-components'
import { DefaultTheme, LightModeColors } from '../styles/themes/default'

type AllThemeType = DefaultTheme & LightModeColors;

declare module 'styled-components' {
    export interface DefaultTheme extends AllThemeType {}
}