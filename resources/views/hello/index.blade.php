<!DOCTYPE html>
<html lang="ja">
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <title>index</title>
  </head>
  <body>
    <h1>Hello/Index</h1>
    <p>{{$msg}}</p>

    <table border="1">
      @foreach($data as $item)
        <tr>
          <th>{{ $item->id }}</th>
          <td>{{ $item->name }}</td>
          <td>{{ $item->mail }}</td>
          <td>{{ $item->age }}</td>
        </tr>
      @endforeach
    </table>

  </body>
</html>
