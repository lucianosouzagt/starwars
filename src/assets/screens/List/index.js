import React, { useState, useEffect }from 'react';
import { Modal } from 'react-native';
import C from './style';
import api from '../../../services/api';
import ListItem from '../../componets/ListItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => {
  const[loading, setLoading] = useState(true);
  const[list, setList] = useState([]);
  const[next, setNext] = useState([]);
  const[previous, setPrevious] = useState([]);
  const[page, setPage] = useState('');
  const[showModal, setShowModal] = useState(false);

  useEffect(() => {
    getAll();
    openModal();

  }, []);

  const openModal = () => {
      setTimeout(()=>{
        setShowModal(true);
      },45000)
    
  }

  const getAll = async () => {
    setList([]);
    setLoading(true);
   
    const result = await api.getAll();
    setLoading(false);
    setList(result.results);
    setPage(1);
    setNext(result.next);
    setPrevious(result.previous);
  }
  const handleClick = async (data) =>{
    url = data.split("=")
    setLoading(true);
    const result = await api.getPage(url[1]);
    setPage(url[1]);
    setLoading(false);
    setList(result.results);
    setNext(result.next);
    setPrevious(result.previous);
    
  }
  const handleSave = async (data) => {
    await AsyncStorage.setItem('pagamento', data);
    setShowModal(false);
  };

  return (
    <C.Container>
      {loading &&
        <C.LoadingIcon color="#0e4e79" size="large" />
      }
      {!loading &&
        <>
            <C.List 
                data={list}
                onRefresh={getAll}
                refreshing={loading}
                renderItem={({item})=><ListItem data={item} />}
                keyExtractor={(item)=>item.name.toString()}
            />
            <C.Area>
                <C.SubArea>
                    {previous &&
                        <Icon name="arrow-left" size={25} color="#000" onPress={()=>handleClick(previous)} />
                    }
                </C.SubArea>          
                <C.SubArea>
                    <C.Text>{page}</C.Text>
                </C.SubArea>
                <C.SubArea>
                    {next &&
                        <Icon name="arrow-right" size={25} color="#000" onPress={()=>handleClick(next)} />
                    }
                </C.SubArea>
            </C.Area>
        </>            
      }
      <Modal
                animationType='slide'
                transparent={true}
                visible={showModal}
            >
                <C.ModalBackground>
                    <C.ModalArea>
                        <C.ModalTitle>Para continuar utilizando o aplicativo, efetue o pagamento, por favor!</C.ModalTitle>
                        <C.ModalButtom>
                            <C.ButtomArea onPress={()=>handleSave('PAGAR')}>
                                <C.ButtomText>PAGAR</C.ButtomText>
                            </C.ButtomArea>
                            <C.ButtomArea onPress={()=>handleSave('MAIS TARDE')}>
                                <C.ButtomText>MAIS TARDE</C.ButtomText>
                            </C.ButtomArea>                        
                        </C.ModalButtom>                    
                    </C.ModalArea>
                </C.ModalBackground>
            </Modal>
    </C.Container>
  );
};