module.exports = {

  friendlyName: 'Delete task',
  description: 'Delete the given task',

  inputs: {
    id: {
      type: 'number',
      required: true
    }
  },

  exits: {

  },

  fn: async function (inputs) {
    await Tasks.destroyOne({ id: inputs.id })

    // All done.
    return;

  }
};
