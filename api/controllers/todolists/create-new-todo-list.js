module.exports = {


  friendlyName: 'Create new todo list',
  description: '',
  inputs: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    }
  },
  exits: {

  },

  fn: async function (inputs) {

    await TodoLists.create({
      title: inputs.title,
      description: inputs.description,
      fk_user: this.req.me.id
    })

    var todoLists = await TodoLists.find({ fk_user: this.req.me.id })
    // All done.
    return todoLists;
  }
};
