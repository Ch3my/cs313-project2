parasails.registerPage('tl-index', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    showCreateNewTodoListForm: false,
    showCreateNewTaskForm: false,
    createNewTodoListFormData: {},
    createNewTaskFormData: {},
    createNewTodoListSyncing: false,
    createNewTaskSyncing: false,
    selectedTodoList: 0,
    tasks: {}
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {
    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS);
  },
  mounted: async function () {
    // Fill the taks of the first TodoList
    this.getTodoListTasks(this.todoLists[0].id)
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    handleParsingCreateNewTodoList: function () {
      var argins = this.createNewTodoListFormData
      return argins
    },
    createNewTodoListSubmittedForm: function (event) {
      // update todolists and clear form Data
      this.createNewTodoListFormData = {}
      this.todoLists = event
    },
    getTodoListTasks: async function (id) {
      this.selectedTodoList = id
      try {
        var tasks = await Cloud.getTodolistTasks.with({ fk_todolist: id })
        this.tasks = tasks
      } catch (e) {
        console.log(e)
      }
    },
    handleParsingCreateNewTask: function () {
      var argins = this.createNewTaskFormData
      argins.fk_todoList = this.selectedTodoList
      return argins
    },
    createNewTaskSubmittedForm: function (event) {
      // update Tasks
      this.tasks = event
      // clear form
      this.createNewTaskFormData = {}
      // close form
      this.showCreateNewTaskForm = false
    },
    toggleState: async function(element){
      console.log(element.target.dataset.rowId)
      await Cloud.updateTask.with({id: element.target.dataset.rowId})
    }
  }
});
