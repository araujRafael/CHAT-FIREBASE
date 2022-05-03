import React from 'react';
import { useThemeContext } from '../../Context/ThemeContext';
import MoonIcon from '../../icons/MoonIcon';
import SunIcon from '../../icons/SunIcon';
import {
  Switch,
  Thumb,
  SwitchContent,
  WrapSwitch,
  ThumbContent
} from './styled'

const SwitchTheme: React.FC = () => {
  const { isDark, changeTheme, setChangeTheme } = useThemeContext()
  const [onOff, setOnOff] = React.useState(() => changeTheme ? 'on' : 'off')

  return (
    <WrapSwitch >
      <SunIcon data-width={25} data-color={`${isDark ? '#bbb' : ''}`} />
      <SwitchContent
        className={'switch'}
        onCheckedChange={e => {
          setChangeTheme(e);
          // console.log(e);
          e ? setOnOff('on') : setOnOff('off')
        }}
        checked={changeTheme ? true : false}
      >
        <ThumbContent className={'thumb ' + onOff} />
        {/* <SwitchContent /> */}
      </SwitchContent>
      <MoonIcon data-width={25} data-color={`${isDark ? '#bbb' : ''}`} />
    </WrapSwitch >
  );
}

export default SwitchTheme;