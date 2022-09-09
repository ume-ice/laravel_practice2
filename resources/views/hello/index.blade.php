<!DOCTYPE html>
<html lang="ja">
  <head>
    <title>index</title>
    <link rel="stylesheet" href="{{mix('css/app.css')}}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
  </head>
  <body>
    <h1>Hello/Index</h1>
    <p>{{$msg}}</p>

    <app-my></app-my>

    <script src="{{ mix('js/app.js') }}"></script>
  </body>
</html>
