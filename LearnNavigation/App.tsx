import React, { Children } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import DetailScreen from './screen/DetailScreen';
import {View, Text, TouchableOpacity} from 'react-native';
import HeaderlessScreen from './screen/HeaderlessScreen';

// 스택 생성
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* 초기화면 Home으로 설정 */}
      <Stack.Navigator initialRouteName='Home'
      // 모든 화면 헤더를 노출시키고 싶지 않을 때
      // screenOptions={{
      //   headerShown : false,
      // }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title : '홈',
            //header 블록에 대한 스타일
            headerStyle : {
              backgroundColor : '#29b6f6',
            },
            // header의 텍스트, 버튼들 색상
            headerTintColor : '#ffffff',
            // 타이틀 텍스트의 스타일
            headerTitleStyle : {
              fontWeight : 'bold',
              fontSize : 20,
            },
          }}
          />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options= {{
            //뒤로가기
            headerBackVisible : false,
            headerLeft : ({onPress}) => (
              <TouchableOpacity onPress={onPress}>
                <Text>Left</Text>
              </TouchableOpacity>
            ),
            headerTitle : ({children}) => (
              <View>
                <Text>{children}</Text>
              </View>
            ),
            headerRight : () => (
              <View>
                  <Text>Right</Text>
              </View>
            ),
          }}
          />
          <Stack.Screen
            name="Headerless"
            component={HeaderlessScreen}
            options={{
              headerShown : false,
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;