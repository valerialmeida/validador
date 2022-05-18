<!DOCTYPE html>

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>JavaScript Gama Academy</title>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
        integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

    <link rel="stylesheet" href="./style.css">


</head>

<body>
    <div class="jumbotron">
        <div class="container">
            <h1 class="page-header">Validador de CPF</h1>
            <p>Através deste simples algoritmo, veremos diversos recursos e habilidades da linguagem Javascript</p>
        </div>

    </div>
    <div class="container formulario">
        <form>
            <div class="form-group">
                <div class="input-group input-group-lg">
                    <span class="input-group-addon" id="sizing-addon1">CPF</span>
                    <input type="text" class="form-control" placeholder="Digite o cpf para validação ..."
                        aria-describedby="sizing-addon1" id="cpf_digitado">
                </div>
                <small class="form-text text-muted">Digite somente numeros</small>
            </div>
            <button type="button" class="btn btn-info" onclick ="validacao()"> Validar !</button>
        </form>
    </div>
    <div class="container page-header">
        <div id="success" class="alert alert-success" style="display: none;" role="alert">
            <strong>Oba!</strong> Seu CPF é válido
        </div>
        <div id="error" class="alert alert-danger" style="display: none;" role="alert">
            <strong>Ops!</strong> Seu CPF não é válido
        </div>
    </div>

</body>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" crossorigin="anonymous"
    integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"></script>

<script src ="./script.js"></script>

</html>
