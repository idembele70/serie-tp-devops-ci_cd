export default class Todos {
  private readonly todos: string[];
  constructor(todos: string[]) {
    this.todos = todos
  }

  public add(name:string) {
    this.todos.push(name)
  }

  public delete(name:string) {
    const todoIndex = this.todos.findIndex(todo => todo === name);
    this.todos.splice(todoIndex, 1);
  }

  public get length() : number {
    return this.todos.length;
  }

  public findOne = (name: string) => this.todos.find(todo => todo === name);
};
