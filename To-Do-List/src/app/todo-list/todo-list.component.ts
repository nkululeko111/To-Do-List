import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task {
  name: string;
  dueDate: string;
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

  ngOnInit(): void {
    this.loadTasks();
  }

  addTask() {
    if (this.task && this.dueDate) {
      const newTask: Task = { name: this.task, dueDate: this.dueDate, completed: false };
      this.tasks.push(newTask);
      this.saveTasks();
    } else {
      alert('Task name and due date are required');
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
}
