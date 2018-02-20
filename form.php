<?

	for($e="",$b="",$i=1;$i<=12;$i++) {
		if(@$_POST["field{$i}-required"] && !@$_POST["field{$i}"]) {
			$e .= "<li> ".@$_POST["field{$i}-name"]." not specified</li>";
		}
		elseif(@$_POST["field{$i}-name"] && @$_POST["field{$i}"]) {
			$b .= @$_POST["field{$i}-name"].": ".@$_POST["field{$i}"]."\r\n"; 
		}
		elseif(@$_POST["field{$i}"]) {
			$b .= @$_POST["field{$i}-name"]."".@$_POST["field{$i}"]."\r\n"; 
		}
	}
	
	if($e || !$b) {
		if(!$e) $e = "<li> Form error</li>";
		$b_page = "<h1>Oops</h1><p>The following errors occured while processing your request<ul>{$e}</ul><a href=javascript:history.back()>Click here to return to the previous page &#187;</a></p>";
	}
	else {
		$b_page = "<h1>Thank You</h1><p>Your enquiry has been submitted</p>";
		mail("admin@scottfire.com.au", "Sitelaunch Website Enquiry", $b);
	}
	
	if(file_exists("inner.html")) $b = file_get_contents("inner.html");
	else $b = file_get_contents("index.html");
	$b = explode("<!-- sitelaunch:content --!></!-- >", $b);
	
	print @$b[0].$b_page.@$b[2];

?>