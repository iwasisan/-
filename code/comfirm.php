<?php
  $name = $_POST["your_name"];
  $mail = $_POST["adress"];

  $tel = $_POST["phone"];
  $qus = $_POST["kenmai"];

  $area = $_POST["consultation_area"];

?>

<?php
  if(isset($_POST["privacy"])){
    $pri = $_POST["privacy"];
  }
?>


<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./style.css">
<title>入力内容の確認｜メール送信フォーム</title>
</head>
<body>
  <form action="complete.php" method="post">
    <h2>入力内容の確認</h2>
    <div>
      <label class="title">
        〇お名前
      </label>
      <br>
        <?php
          if(empty($name)){
            echo "名前が未入力です";
          }
        ?>
      <p><?php echo $name ?></p>
      <input type="hidden" name="your_name" value="<?php echo $name ?>">
    </div>

    <div>
      <label class="title">
        〇メールアドレス
      </label>
      <br>
          <?php
            if(empty($mail)){
              echo "メールアドレスが未入力です";
            }
          ?>
        <p><?php echo $mail ?></p>
        <input type="hidden" name="adress" value="<?php echo $mail ?>">
    </div>

    <div>
      <label class="title">
        〇電話番号
      </label>
      <br>
      <?php
        if(empty($tel)){
          echo "電話番号が未入力です";
        }
      ?>
    <p><?php echo $tel ?></p>
    <input type="hidden" name="phone" value="<?php echo $tel ?>">
    </div>

    <div>
      <label class="title">
        〇件名
      </label>
      <br>
      <?php
        if(empty($qus)){
          echo "件名が未入力です";
        }
      ?>
      <p><?php echo $qus ?></p>
      <input type="hidden" name="kenmai" value="<?php echo $qus ?>">
    </div>

    <div>
    <label class="title">
      〇相談項目の内容
    </label>
    <br>
      <?php
        if(empty($area)){
          echo "200文字以内で内容の記載をお願いします";
        }
      ?>
    <br>
    <textarea class="area" name="consultation_area"><?php echo $area ?></textarea>
  </div>

  <div>
    <label class="title">
      〇個人情報の取り扱いについて
    </label>
    <br>
      <?php
        if(empty($pri)){
          echo "承諾の場合はチェックお願いします";
        }
      ?>
    <br>
    <?php
      if(isset($pri)){?>
      <input type=checkbox name="privacy" value="consent" checked disabled="disabled">
      プライバシーポリシーに同意
    <?php } ?>
  </div>
  <input type="submit" value="送信" name="add">
  </form>
</body>