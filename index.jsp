<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8">
        <title>タスク管理アプリ</title>
        <link rel="stylesheet" href="src/css/style.css">
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="src/js/main.js"></script>
        <!-- Materialize CSS を追加 -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </head>

    <body>
        <jsp:include page="src/components/Header.jsp" />
        <div class="container">
            <jsp:include page="src/components/TaskTable.jsp" />
            <jsp:include page="src/components/TaskForm.jsp" />
        </div>
    </body>

    </html>