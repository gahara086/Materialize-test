<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<h5>タスク追加/編集</h5>
<form id="task-form">
    <div class="input-field">
        <input id="task-name" type="text" required>
        <label for="task-name">タスク名</label>
    </div>
    <div class="input-field">
        <select id="task-status">
            <option value="未完了">未完了</option>
            <option value="完了">完了</option>
        </select>
        <label>状態</label>
    </div>
    <button class="btn waves-effect waves-light" type="submit">保存
    </button>
</form>