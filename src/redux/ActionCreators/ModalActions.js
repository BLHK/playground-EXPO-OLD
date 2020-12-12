export const MODAL = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
};

export const openModal = (user) => ({
  type: MODAL.OPEN_MODAL,
  payload: user,
});

export const closeModal = () => ({
  type: MODAL.CLOSE_MODAL,
});
