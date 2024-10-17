import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task {
  name: string;
  dueDate: string;
  priority: string;
  completed: boolean;
}

@Component({
  standalone: true,
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [CommonModule, FormsModule]
})
export class TodoListComponent implements OnInit {
  tasks: Task[] = [];
  task: string = '';
  dueDate: string = '';
  priority: string = 'Medium';

  ngOnInit(): void {
    this.loadTasks();
  }

  addTask() {
    if (this.task && this.dueDate && this.priority) {
      const newTask: Task = { name: this.task, dueDate: this.dueDate, priority: this.priority, completed: false };
      this.tasks.push(newTask);
      this.saveTasks();
      this.task = '';
      this.dueDate = '';
      this.priority = 'Medium';
    } else {
      alert('Task name, due date and priority are required');
    }
  }

  removeTask(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.saveTasks();
  }

  loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  isOverdue(task: Task): boolean {
    const today = new Date().toISOString().split('T')[0];
    return task.dueDate < today;
  }

  getPriorityColor(priority: string): string {
    switch (priority) {
      case 'High':
        return 'red';
      case 'Medium':
        return 'orange';
      case 'Low':
        return 'green';
      default:
        return 'black';
    }
  }
}
