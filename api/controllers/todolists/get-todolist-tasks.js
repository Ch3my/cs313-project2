module.exports = {

  friendlyName: 'Get todolist tasks',
  description: '',

  inputs: {
    fk_todolist: {
      type: 'number',
      required: true
    }
  },

  exits: {

  },


  fn: async function (inputs) {

    var tasks = await Tasks.find({ fk_todoList: inputs.fk_todolist })

    // All done.
    return tasks;

  }
};
