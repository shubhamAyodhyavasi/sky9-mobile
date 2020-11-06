import {StyleSheet} from 'react-native';
import colors from './colors';

const gbStyle = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerGradient: {
    height: 60,
  },
  headerLogo: {
    height: 25,
    width: 100,
  },
  body: {
    backgroundColor: colors.dark,
    flex: 1,
  },
  // alignment
  verticalCenterView: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  // buttons
  headerBtn: {
    width: 100,
  },
  yellowBtn: {
    width: '100%',
    backgroundColor: colors.yellow,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  borderButton: {
    borderColor: colors.textBase,
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
  },

  videoBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  //  texts
  noLoginText: {
    textAlign: 'center',
    padding: 10,
    color: colors.textBase,
  },
  lightLabel: {
    color: colors.textLight,
    paddingVertical: 3,
  },
  baseText: {
    color: colors.textBase,
  },
  yellowText: {
    color: colors.yellow,
  },
  centerText: {
    textAlign: 'center',
  },
  heaingText: {
    fontSize: 20,
  },
  detailHeadline: {
    padding: 8,
    borderBottomColor: colors.textLight,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  searchBox: {
    backgroundColor: colors.baseText,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'white',
    color: 'white',
    minWidth: 200,
    flex: 1,
    height: 50,
    padding: 10,
    paddingHorizontal: 5,
  },
  searchBoxWrapper: {
    paddingVertical: 5,
    backgroundColor: colors.transparant,
  },
  // form
  formWrapper: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.whiteTran1,
    margin: 20,
  },
  formItem: {
    marginBottom: 10,
  },
  // columns
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  col100: {
    width: '100%',
    padding: 8,
  },
  col50: {
    width: '50%',
    padding: 8,
  },
});

export default gbStyle;
