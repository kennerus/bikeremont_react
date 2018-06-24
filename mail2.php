<?php

 if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
    $to = 'kennerus@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Обратный звонок'; //Загаловок сообщения
    $message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p><strong>Имя:</strong> '.$_POST['name'].'</p>
                    <p><strong>Телефон:</strong> '.$_POST['phone'].'</p>                        
                </body>
            </html>'; //Текст нашего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Отправитель <bikeremont.dn.ua>\r\n"; //Наименование и почта отправителя
     mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail

}
?>
