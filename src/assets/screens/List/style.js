import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        background-color: #F5F6FA;
        padding: 20px;
    `,   
    LoadingIcon: styled.ActivityIndicator`
        flex: 1;
        justify-content: center;
        align-items: center;
    `,
    List: styled.FlatList`
        flex: 1;
    `,
    Area: styled.View`
        height: 40px;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
        padding: 5px;
    `,
    Text: styled.Text`
        font-size: 15px;
        font-weight: 400;
        color: #000;
    `,
    SubArea: styled.View`
    `,
    ModalBackground: styled.View`
        flex: 1;   
        background-color: rgba(0,0,0,0.7);
        `,
    ModalArea: styled.View`
        width:90%;
        height:90%;
        border-radius: 10px;
        margin: auto;
        background-color: #fff;
        padding: 15px;
    `,
    ModalTitle: styled.Text`
        text-align: center;
        font-size: 25px;
        font-weight: 700;
        color: #000;
        margin: 25px;
    `,
    ModalButtom: styled.View`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        bottom: 25px;
        left: 15px;
        right:15px;
    `,
    ButtomArea: styled.TouchableOpacity`
        background-color: #0e4e79;
        width: 130px;
        padding: 12px;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin-top: 15px;
    `,
    ButtomText: styled.Text`
        color: #FFF;
        font-size: 15px;
        font-weight: 700;
    `,
};