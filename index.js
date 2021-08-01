const randomID = (idLength) => {
  let id = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charsAmount = characters.length;
  for(let i = 0; i < idLength; i++) {
      id += characters.charAt(Math.floor(Math.random() * charsAmount));
  }
  return id;
}
module.exports = randomID;