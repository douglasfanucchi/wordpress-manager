const defaultState = {
  open: false,
};

const types = {
  openModal: (state) => ({ ...state, open: true }),
  closeModal: (state) => ({ ...state, open: false }),
};

export default function modalLogin(state = defaultState, action) {
  let func = types[action.type];

  if (!func) return state;

  return func(state, action);
}
