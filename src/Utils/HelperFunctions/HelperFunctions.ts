import {CommonActions} from '@react-navigation/native';

export function resetStack(routeName: string, params: object) {
  return CommonActions.reset({
    index: 0,
    routes: [{name: routeName, params}],
    // eslint-disable-next-line prettier/prettier
  });
}

export function dummy() {}
