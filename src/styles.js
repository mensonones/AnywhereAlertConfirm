import {StyleSheet} from 'react-native';

const paddingTopSubTitle = 10;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    width: '70%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  titleContainerLeft: {
    alignItems: 'flex-start',
  },
  titleContainerCenter: {
    alignItems: 'center',
  },
  titleContainerRight: {
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitleContainerLeft: {
    alignItems: 'flex-start',
    paddingTop: paddingTopSubTitle,
  },
  subTitleContainerCenter: {
    alignItems: 'center',
    paddingTop: paddingTopSubTitle,
  },
  subTitleContainerRight: {
    alignItems: 'flex-end',
    paddingTop: paddingTopSubTitle,
  },
  subTitle: {
    fontSize: 16,
  },
  buttonsContainerLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
  },

  buttonsContainerCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

  buttonsContainerRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  buttonCancel: {
    marginRight: 20,
  },
  buttonConfirm: {
    marginLeft: 5,
  },
  textCancel: {
    color: 'red',
    fontSize: 16,
  },
  textConfirm: {
    color: 'green',
    fontSize: 16,
  },
});

export default styles;
