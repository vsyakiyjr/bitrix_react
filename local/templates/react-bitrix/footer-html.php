<?php
    if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();
    use \RB\React;
    use \RB\Page;
?>
<div id="root"><? React::renderHTML() ?></div>
<?php
    React::renderData();
    Page::renderPoint(Page::POINT_FOOTER_ASSETS);
    Page::renderAllAssets();
    React::renderRenderTime();
?>
<style>
.ant-tabs {
	display: flex;
    min-width: 516px;
}
.ant-tabs-content-holder {
	width: 84%;
}
.ant-tabs-tabpane {
	display: flex;
	flex-wrap: wrap;
}
.ant-tabs-nav {
	width: 15%;
	margin-right: 1%;
}
.card {
	flex: 0 0 calc(100% - 6rem);
	width: calc(100% - 6rem);
	margin: 3rem!important;
}
.btn { 
    width: 100%;
    height: 30px; 
    display: block;
    font-size: 14px;
}
.card-header,
.list-group-item {
    padding: 5rem 15rem;
}
</style>
</body>
</html>