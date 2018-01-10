var jane = {
  name: 'jane',
  friends: ['xiao', 'yu'],
  friendName: function () {
    this.friends.forEach(function (num) {
      console.log(this)
    }, this)
  }
}
var strict = jane.friendName.bind(jane);//没有bind strict()就是window调用
strict();