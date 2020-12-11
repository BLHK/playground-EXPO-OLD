export const MODAL = {
  SET_MODAL: "SET_MODAL",
};

export const setModalActive = (isActive) => ({
  type: MODAL.SET_MODAL,
  payload: isActive,
});
