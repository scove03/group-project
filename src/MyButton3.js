import Rect from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

//TouchableOpacity = Pressable (동일)

const MyButton = ({ title='title', onPress=() => {}, children }) => {
    return (
        <TouchableOpacity onPress={onPress}
        //hitSlop={{ botton: 10, top:10, left:10, right:10}}== padding
        //pressRetentionOffset={{ botton: 10, top:10, left:10, right:10}} =취소처리길이
        >
            <View style={{backgroundColor: 'red', padding: 10, margin: 10}}>
                <Text style={{fontSize: 20, color: 'white' }}>{children || title}</Text>
            </View>
        </TouchableOpacity>
    )
}

MyButton.defaultProps ={
    title:defult
}

export default MyButton;

//props 부모가 자식에게 전달하는 데이터(수정불가 부모가 수정해야함)
//state 컴포넌트가 갖고있는 데이터(수정 자유로움)