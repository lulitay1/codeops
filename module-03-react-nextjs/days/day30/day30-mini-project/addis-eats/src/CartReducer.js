export function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        items: [
          ...state.items,
          {
            ...action.dish,
            cartItemId: crypto.randomUUID(),
          },
        ],
      };

    case "remove":
      return {
        items: state.items.filter(
          (item) => item.cartItemId !== action.id
        ),
      };

    case "clear":
      return {
        items: [],
      };

    default:
      throw new Error("Unknown action: " + action.type);
  }
}