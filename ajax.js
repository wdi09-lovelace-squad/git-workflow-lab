// GET placeholder http://jsonplaceholder.typicode.com/users
var Users = {
  listUsers: function(callback) {
    this.ajax({
      method: 'GET',
      url: 'http://jsonplaceholder.typicode.com/users',
      dataType: 'json'
    }, callback);
  }
}
