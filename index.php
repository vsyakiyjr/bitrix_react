<? require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php"); ?>
<? global $APPLICATION; ?>
<? $APPLICATION->SetTitle("React with bitrix");?>

<p>123</p>
<script>console.log(1)</script> 

<Wrapper<? r_props(['style' => 'color:red;font-size:20px']) ?>>
    test
</Wrapper>


<? require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");