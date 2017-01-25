//ajax를 요청했을때 그 결과값을 처리하는 액션

export const RECV_VALUE = "RECV_VALUE";

export function reciveValue(value) {
  return {
    type: RECV_VALUE,
    value: value
  };
};
