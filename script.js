// Определяем класс для узла списка
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Определяем класс для списка
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Добавление элемента в конец списка
  add(value) {
    const node = new ListNode(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  // Удаление дубликатов из списка
  removeDuplicates() {
    if (!this.head) {
      return;
    }
    let current = this.head;
    while (current) {
      let runner = current;
      while (runner.next) {
        if (runner.next.value === current.value) {
          runner.next = runner.next.next;
        } else {
          runner = runner.next;
        }
      }
      current = current.next;
    }
  }

  // Вывод списка в консоль
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Создаем список и добавляем элементы
const list = new LinkedList();
list.add(4);
list.add(2);
list.add(3);
list.add(4);
list.add(3);
list.add(6);

// Удаляем дубликаты и выводим список в консоль
list.removeDuplicates();
list.print();
