export async function searchBooks(query) {
  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${query}`
    );

    const data = await response.json();

    return data.docs || [];
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    return [];
  }
}