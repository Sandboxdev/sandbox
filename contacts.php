<?
   $to = 'hello@sandboxdev.by';
   $subject = 'Заполнена контактная форма с '.$_SERVER['HTTP_REFERER'];
   $subject = "=?utf-8?b?". base64_encode($subject) ."?=";
   $message = "Имя: ".$_POST['name']."\nPhone: ".$_POST['phone']."\nIP: ".$_SERVER['REMOTE_ADDR']."\nТип: ".$_POST['type'];

   if (array_key_exists('body', $_POST)) {
   		$message = $message."\nСообщение: ".$_POST['body'];
   }
   if (array_key_exists('e-mail', $_POST)) {
   		$message = $message."\ne-mail: ".$_POST['e-mail'];
   }
   if (array_key_exists('skype', $_POST)) {
   		$message = $message."\nSkype: ".$_POST['skype'];
   }

   $headers = 'Content-type: text/plain; charset="utf-8"';
   $headers .= "MIME-Version: 1.0\r\n";
   $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
   mail($to, $subject, $message, $headers);

?>