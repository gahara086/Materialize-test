$(document).ready(function () {
    // Materializeの初期化
    $('select').formSelect();

    // タスクのデータを保持する配列
    let tasks = [
        { id: 1, name: 'サンプルタスク1', status: '未完了' },
        { id: 2, name: 'サンプルタスク2', status: '完了' }
    ];

    // タスクの取得と表示
    function loadTasks() {
        const tbody = $('#task-table-body');
        tbody.empty();
        tasks.forEach(task => {
            tbody.append(`
                <tr>
                    <td>${task.id}</td>
                    <td>${task.name}</td>
                    <td>${task.status}</td>
                    <td>
                        <button class="btn-small edit-btn">編集</button>
                        <button class="btn-small red delete-btn">削除</button>
                    </td>
                </tr>
            `);
        });
    }

    loadTasks();

    // フォームの送信処理
    $('#task-form').submit(function (e) {
        e.preventDefault();
        const taskName = $('#task-name').val().trim();
        const taskStatus = $('#task-status').val();

        if (taskName === '') {
            alert('タスク名を入力してください。');
            return;
        }

        // 新しいタスクのIDを生成
        const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

        // 新しいタスクを追加
        const newTask = {
            id: newId,
            name: taskName,
            status: taskStatus
        };
        tasks.push(newTask);

        // タスク一覧を更新
        loadTasks();

        // フォームをリセット
        this.reset();
        $('select').formSelect();
    });

    // 編集ボタンのクリック処理
    $(document).on('click', '.edit-btn', function () {
        const row = $(this).closest('tr');
        const id = parseInt(row.find('td:first').text());
        const task = tasks.find(t => t.id === id);

        if (task) {
            const newName = prompt('新しいタスク名を入力してください。', task.name);
            if (newName !== null) {
                task.name = newName.trim() !== '' ? newName.trim() : task.name;
            }

            const newStatus = prompt('新しい状態を入力してください。（未完了／完了）', task.status);
            if (newStatus === '未完了' || newStatus === '完了') {
                task.status = newStatus;
            } else if (newStatus !== null) {
                alert('無効な状態です。変更されませんでした。');
            }

            loadTasks();
        }
    });

    // 削除ボタンのクリック処理
    $(document).on('click', '.delete-btn', function () {
        if (confirm('本当にこのタスクを削除しますか？')) {
            const row = $(this).closest('tr');
            const id = parseInt(row.find('td:first').text());
            tasks = tasks.filter(t => t.id !== id);
            loadTasks();
        }
    });
}); 