module.exports = {

  friendlyName: 'Create new task',
  description: '',

  inputs: {
    description: {
      type: 'string',
      required: true
    },
    fk_todoList: {
      type: 'number',
      required: true
    }
  },

  exits: {

  },

  fn: async function (inputs) {

    await Tasks.create({
      description: inputs.description,
      fk_todoList: inputs.fk_todoList,
      fk_user: this.req.me.id
    })

    var tasks = await Tasks.find({ fk_todoList: inputs.fk_todoList })
    // All done.
    return tasks;

  }
};
