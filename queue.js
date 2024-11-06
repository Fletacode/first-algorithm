class Queue {
    constructor() {
        this.items = [];
    }

    // 큐에 요소 추가 (enqueue)
    enqueue(element) {
        this.items.push(element);
    }

    // 큐에서 요소 제거 (dequeue)
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    // 큐가 비어 있는지 확인
    isEmpty() {
        return this.items.length === 0;
    }

    // 큐의 첫 번째 요소 확인 (peek)
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // 큐의 크기 확인
    size() {
        return this.items.length;
    }
}

module.exports = Queue;