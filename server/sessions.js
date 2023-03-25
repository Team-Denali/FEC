const sessions = {};

module.exports.setOutfit = (session, outfit) => {
  sessions[session] = outfit;
}

module.exports.getOutfit = (session) => {
  return sessions[session];
}