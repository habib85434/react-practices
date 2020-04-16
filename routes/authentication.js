module.exports = (server, mockData) => {
  server.post('/auth/sessions', (req, res) => {
    var inputParam = req.body;
    var user = mockData.users.find(u => {
      return u.userName === inputParam.userName;
    });
    console.log("user:", user.sessions.length);
    var session = user.sessions.length >= 1 ? user.sessions.pop() : user.sessions.push({
      "token": "95ce1578-5262-4e11-98ec-84a45aee56e0",
      "expiredMinutes": 54,
      "userName": "demo",
      "password": "demo",
      "userId": 1
    })

    res.jsonp(user.sessions.pop());
  });
};
