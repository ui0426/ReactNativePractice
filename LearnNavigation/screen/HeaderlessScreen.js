import React from 'react';
import {View, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function HeaderlessScreen({navigation}) {
    return (
        // 영역 침범하는 경우 사용하면 영역 침범당하지 않는다
        <SafeAreaView>
            <View>
                <Text>Header가 없네?</Text>
                <Button onPress={() => navigation.pop()} title="뒤로가기"/>
            </View>
        </SafeAreaView>
    );
}

export default HeaderlessScreen;