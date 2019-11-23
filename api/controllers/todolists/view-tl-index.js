module.exports = {

  friendlyName: 'View tl index',
  description: 'Display "Tl index" page.',

  exits: {

    success: {
      viewTemplatePath: 'pages/todolists/tl-index'
    }

  },


  fn: async function () {

    var todoLists = await TodoLists.find({ fk_user: this.req.me.id })

    // Respond with view.
    return {
      todoLists
    };

  }
};
