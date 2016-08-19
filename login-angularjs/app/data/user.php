<?php
	$user = json_decode(file_get_contents('php://input'));
	if($user->mail=='guga@gmail.com' && $user->pass='1234')
		session_start();
		$_SESSION['uid']=uniqid('ang_');
		print $_SESSION['uid'];		
?>