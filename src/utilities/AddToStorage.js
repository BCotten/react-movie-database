const handleAddToFavorites = (id) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.includes(id)) {
    favorites.push(id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } else {
    const updatedFavorites = favorites.filter((favoriteId) => favoriteId !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  }
};

const handleAddToWishlist = (id) => {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  if (!wishlist.includes(id)) {
    wishlist.push(id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  } else {
    const updatedWishlist = wishlist.filter((wishlistId) => wishlistId !== id);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  }
};

export { handleAddToFavorites, handleAddToWishlist };