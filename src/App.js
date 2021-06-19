import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';

import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';
import ReactNativeSvg from './pages/ReactNativeSvg';
import BasicJavascripts from './pages/BasicJavascripts';
import CallAPIVanilla from './pages/CallAPIVanilla';
import CallAPIAxios from './pages/CallAPIAxios';
import LocalAPI from './pages/LocalAPI';

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(()=>{
      SetIsShow(false)
    }, 6000);     
  }, [])

  return (
    <View>
      <ScrollView>
        {/* <StylingComponent/> */}
        {/* <SampleComponent/>   */}
        {/* {isShow && <FlexBox/>}    */}
        {/* <FlexBox/> */}
        {/* <PropDinamis/> */}
        {/* <Position/>  */}
        {/* <StateDinamis/> */}
        {/* <Communication/> */}
        {/* <ReactNativeSvg/> */}
        {/* <BasicJavascripts/> */}
        {/* <CallAPIVanilla /> */}
        {/* <CallAPIAxios /> */}
        <LocalAPI />
      </ScrollView> 
    </View>     
  );
};

export default App;