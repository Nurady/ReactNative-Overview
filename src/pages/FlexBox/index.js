import React, { Component, useEffect, useState } from 'react';
import { Image, View, Text } from 'react-native';

//   class FlexBox extends Component {
//     constructor(props) {
//         super(props);
//         console.log('=>contsructor');
//         this.state = {
//             subscriber: 200,
//         }
//     }

//     componentDidMount() {
//         console.log('=>did mount');
//         setTimeout(()=>{
//             this.setState({
//                 subscriber: 300,
//             });
//         }, 2000); 
//     }

//     componentDidUpdate(){
//         console.log('=>did update');      
//     }

//     componentWillUnmount() {
//         console.log('=>will unmount');
//     }

//     render () {
//         console.log('=>render');
//         return (
//             <View>
//                  <View style={{ flexDirection: "row", backgroundColor: '#34656d', alignItems:'center', justifyContent: 'space-between' }}>
//                     <View style={{ backgroundColor: '#04009a', width:80, height: 80}}/>
//                     <View style={{ backgroundColor: '#77acf1', width:80, height: 80}}/>
//                     <View style={{ backgroundColor: '#3edbf0', width:80, height: 80}}/>
//                     <View style={{ backgroundColor: '#c0fefc', width:80, height: 80}}/>
//                 </View>
//                 <View style={{ flexDirection: "row", backgroundColor: '#00adb5', alignItems:'center', justifyContent: 'space-around' }}>
//                     <Text>Beranda</Text>
//                     <Text>Beranda</Text>
//                     <Text>Beranda</Text>
//                     <Text>Beranda</Text>
//                 </View>  
//                 <View style={{ flexDirection: "row", backgroundColor: '#00adb5', alignItems:'center', marginTop: 50, padding:20}}>
//                     <View>
//                         <Image source={{uri: 'https://placeimg.com/100/100/animals' }} style={{width:80, height:80,borderRadius:50}}/>
//                     </View>
//                     <View style={{ paddingLeft: 20}}>    
//                         <Text style={{ fontSize: 30}}>Nursyafriady</Text>
//                         <Text style={{ fontSize: 20}}>{this.state.subscriber} Subscriber</Text> 
//                     </View>
//                 </View>
                         
//             </View>           
//         )
//     }
//   }

  const FlexBox = () => {
    //   Menghandle Perubahan
      const [subscriber, setSubscriber] = useState(200);

      useEffect(() => {
          console.log('did mount');
          setTimeout(()=>{
            setSubscriber(400);
            }, 2000);
          return () => {
              console.log('did updated');
          };
      }, [subscriber]);

    //   useEffect(() => {
    //     console.log('did updated');
    //     setTimeout(()=>{
    //         setSubscriber(300);
    //         }, 3000);
    //   }, [subscriber]);

      return (
        <View>
                <View style={{ flexDirection: "row", backgroundColor: '#34656d', alignItems:'center', justifyContent: 'space-between' }}>
                <View style={{ backgroundColor: '#04009a', width:80, height: 80}}/>
                <View style={{ backgroundColor: '#77acf1', width:80, height: 80}}/>
                <View style={{ backgroundColor: '#3edbf0', width:80, height: 80}}/>
                <View style={{ backgroundColor: '#c0fefc', width:80, height: 80}}/>
            </View>
            <View style={{ flexDirection: "row", backgroundColor: '#00adb5', alignItems:'center', justifyContent: 'space-around' }}>
                <Text>Beranda</Text>
                <Text>Beranda</Text>
                <Text>Beranda</Text>
                <Text>Beranda</Text>
            </View>  
            <View style={{ flexDirection: "row", backgroundColor: '#00adb5', alignItems:'center', marginTop: 50, padding:20}}>
                <View>
                    <Image source={{uri: 'https://placeimg.com/100/100/animals' }} style={{width:80, height:80,borderRadius:50}}/>
                </View>
                <View style={{ paddingLeft: 20}}>    
                    <Text style={{ fontSize: 30}}>Nursyafriady</Text>
                    <Text style={{ fontSize: 20}}>{subscriber} Subscriber</Text> 
                </View>
            </View>     
        </View>   
      )
  }

  export default FlexBox;