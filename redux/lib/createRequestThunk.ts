export default function createRequestThunk(type: string, request: any) {
  // 성공 및 실패 action type
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return (...params: any) => async (
    dispatch: (arg0: { type: string; payload?: any; error?: boolean }) => void
  ) => {
    dispatch({ type });
    // console.log('params', params);
    try {
      const response = await request(...params);
      // console.log('test', response);
      dispatch({
        type: SUCCESS, // 성공
        payload: response.data,
      });
    } catch (e) {
      console.log('test error', e.message);
      dispatch({
        type: FAILURE, // 실패
        payload: e.message,
        error: true,
      });
      // throw e;
    }
  };
}
