export const MODAL = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
};

export const openModal = (user) => {
  console.log("Open modal fired.");
  return function (dispatch) {
    dispatch({
      type: MODAL.OPEN_MODAL,
      payload: user,
    });
  };
};

export const closeModal = () => {
  return function (dispatch) {
    dispatch({
      type: MODAL.CLOSE_MODAL,
    });
  };
};
