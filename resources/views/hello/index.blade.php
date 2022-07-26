<!DOCTYPE html>
<html lang="ja">
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <title>index</title>
    <script>
      function doAction() {
        var id = document.querySelector('#id').value;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/hello/json/' + id, true);
        xhr.responseType = 'json';
        xhr.onload = function(e) {
          if (this.status == 200) {
            var result = this.response;
            document.querySelector('#name').textContent = result.name;
            document.querySelector('#mail').textContent = result.mail;
            document.querySelector('#age').textContent = result.age;
          }
        };
        xhr.send();
      }
    </script>
  </head>
  <body>
    <h1>Hello/Index</h1>
    <p>{{$msg}}</p>

    <div>
      <form action="/hello" method="post">
        @csrf
        <input type="text" id="find" name="find" value="{{$input}}">
        <input type="submit">
      </form>
    </div>

    <hr>

    <table border="1">
      @foreach($data as $item)
        <tr>
          <th>{{ $item->id }}</th>
          <td>{{ $item->name_and_age }}</td>
        </tr>
      @endforeach
    </table>

    <hr>

    <div>
      <input type="number" id="id" value="1">
      <button onclick="doAction();">click</button>
    </div>

    <ul>
      <li id="name"></li>
      <li id="mail"></li>
      <li id="age"></li>
    </ul>

  </body>
</html>
