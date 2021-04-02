import React, { useState } from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Box = styled.View`
    background-color: #FFF;
    border-width: 1px;
    border-color: #999;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 10px;    
`;
const Title = styled.Text`
    font-size: 17px;
    font-weight: 700;
    color: #000;
`;
const Text = styled.Text`
    font-size: 15px;
    font-weight: 700;
    color: #666;
`;
const SubArea = styled.TouchableOpacity`
    margin-right: 10px;
`;
const ModalBackground = styled.View`
    flex: 1;   
    background-color: rgba(0,0,0,0.7);
`;
const ModalArea = styled.View`
    width:90%;
    height:60%;
    border-radius: 10px;
    margin: 45px auto;
    background-color: #fff;
    padding: 15px;
`;
const ModalTitle = styled.Text`
    text-align: center;
    font-size: 25px;
    font-weight: 700;
    color: #000;
    margin: 25px;
`;
const ModalText = styled.Text`
    font-size: 17px;
    font-weight: 400;
    color: #000;
    margin-left: 15px;
    margin-bottom: 10px;
`;
const ModalCloseButton = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 60px;
    right: 25px;
`;


export default ({data}) => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }

    return (
        <Box>
            <SubArea onPress={()=>openModal(data.url)}>
                <Title>Nome: {data.name}</Title>
                <Text>Altura: {data.height}</Text>
                <Text>Peso: {data.mass}</Text>
            </SubArea>
            <Modal
                animationType='slide'
                transparent={true}
                visible={showModal}
            >
                <ModalBackground>
                    <ModalArea>
                        <ModalTitle>{data.name}</ModalTitle>                    
                        <ModalText>Altura: {data.height === 'n/a' ? '': data.height}</ModalText>
                        <ModalText>Peso: {data.mass === 'n/a' ? '': data.mass}</ModalText>
                        <ModalText>Cor do cabelo: {data.hair_color === 'n/a' ? '': data.hair_color}</ModalText>
                        <ModalText>Cor da pele: {data.skin_color === 'n/a' ? '': data.skin_color}</ModalText>
                        <ModalText>Cor dos olhos: {data.eye_color === 'n/a' ? '': data.eye_color}</ModalText>
                        <ModalText>Genero: {data.gender === 'n/a' ? '': data.gender}</ModalText>
                    </ModalArea>
                    <ModalCloseButton onPress={()=>setShowModal(false)}>
                            <Icon name="close" size={24} color="#aaa" />
                    </ModalCloseButton>
                </ModalBackground>
            </Modal>
        </Box>
    );
}