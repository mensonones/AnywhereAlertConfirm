import React, {useCallback, useState} from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

type Alignment = 'left' | 'center' | 'right';

export let showAlertFunction: (
  title: string,
  subTitle: string,
  confirmCallback: () => void,
  cancelCallback: () => void,
  buttonAlignment?: Alignment,
  titleAlignment?: Alignment,
  subTitleAlignment?: Alignment,
  widthPercentage?: string, // 0 - 100
) => void;

const AlertConfirm = () => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [onConfirm, setOnConfirm] = useState(() => () => {});
  const [onCancel, setOnCancel] = useState(() => () => {});
  const [currentButtonAlignment, setCurrentButtonAlignment] = useState('right');
  const [currentTitleAlignment, setCurrentTitleAlignment] = useState('right');
  const [currentSubTitleAlignment, setCurrentSubTitleAlignment] =
    useState('right');
  const [widthPercentage, setWidthPercentage] = useState('80%');

  showAlertFunction = useCallback(
    (
      newTitle,
      newSubTitle,
      confirmCallback,
      cancelCallback,
      buttonAlignment = 'right',
      titleAlignment = 'right',
      subTitleAlignment = 'right',
      widthPercentage = '80%', // Valor padrão de 80%
    ) => {
      setTitle(newTitle);
      setSubTitle(newSubTitle);
      setOnConfirm(() => confirmCallback || (() => {}));
      setOnCancel(() => cancelCallback || (() => {}));
      setCurrentButtonAlignment(buttonAlignment);
      setCurrentTitleAlignment(titleAlignment);
      setCurrentSubTitleAlignment(subTitleAlignment);
      setWidthPercentage(widthPercentage);
      setVisible(true);
    },
    [],
  );

  const hideAlert = () => {
    setVisible(false);
  };

  const handleConfirm = useCallback(() => {
    onConfirm();
    hideAlert();
  }, [onConfirm]);

  const handleCancel = useCallback(() => {
    onCancel();
    hideAlert();
  }, [onCancel]);

  const getButtonContainerStyle = () => {
    switch (currentButtonAlignment) {
      case 'left':
        return styles.buttonsContainerLeft;
      case 'center':
        return styles.buttonsContainerCenter;
      case 'right':
      default:
        return styles.buttonsContainerRight;
    }
  };

  const getTitleContainerStyle = () => {
    switch (currentTitleAlignment) {
      case 'left':
        return styles.titleContainerLeft;
      case 'center':
        return styles.titleContainerCenter;
      case 'right':
      default:
        return styles.titleContainerRight;
    }
  };

  const getSubTitleContainerStyle = () => {
    switch (currentSubTitleAlignment) {
      case 'left':
        return styles.subTitleContainerLeft;
      case 'center':
        return styles.subTitleContainerCenter;
      case 'right':
      default:
        return styles.subTitleContainerRight;
    }
  };

  const setStyleRoot = () => {
    const copyStyles = {...styles.container};
    copyStyles.width = widthPercentage;
    return copyStyles;
  };

  return (
    <Modal transparent={true} visible={visible} onRequestClose={hideAlert}>
      <View style={styles.root}>
        <View style={setStyleRoot()}>
          <View style={getTitleContainerStyle()}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={getSubTitleContainerStyle()}>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
          <View style={getButtonContainerStyle()}>
            <TouchableOpacity
              style={styles.buttonCancel}
              onPress={handleCancel}>
              <Text style={styles.textCancel}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonConfirm}
              onPress={handleConfirm}>
              <Text style={styles.textConfirm}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AlertConfirm;
