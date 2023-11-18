export default async function getImg() {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?limit=5&page=100"
    );
    const images = await response.json();
    return images;
  } catch (error) {
    return error;
  }
}
