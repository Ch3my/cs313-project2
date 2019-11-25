module.exports = {

  friendlyName: 'Update task',
  description: '',
  inputs: {
    id: {
      type: 'number'
    }
  },


  exits: {

  },

  fn: async function (inputs) {
    var taskActualState = await Tasks.findOne({ id: inputs.id })
    await Tasks.update({ id: inputs.id }).set({ completed: !taskActualState.completed })

    // All done.
    return;

  }
};
