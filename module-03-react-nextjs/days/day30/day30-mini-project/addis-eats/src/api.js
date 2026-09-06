export async function fetchDishes(signal) {
  const response = await fetch("/dishes.json", {
    signal,
  });

  if (!response.ok) {
    throw new Error(
      "Could not load the menu. Please try again."
    );
  }

  return response.json();
}