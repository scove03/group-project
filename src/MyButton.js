import Rect from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

//TouchableOpacity = Pressable (동일)

const MyButton = () => {
    return (
        <TouchableOpacity onPress={() => alert('MyButton')}
        //hitSlop={{ botton: 10, top:10, left:10, right:10}}== padding
        //pressRetentionOffset={{ botton: 10, top:10, left:10, right:10}}:취소처리길이
        >
            <View style={{backgroundColor: 'red', padding: 10, margin: 10}}>
                <Text style={{fontSize: 20, color: 'white' }}>MyButton</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MyButton;