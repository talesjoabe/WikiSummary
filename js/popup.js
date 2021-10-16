$(function(){
    $('#keywordsubmit').click(function(){

		var search_topic = $('#onSumit').val();


		if (search_topic){
                chrome.runtime.sendMessage(
					{topic: search_topic},
					function(response) {
						result = response.farewell;
						alert(result.summary);

						var notifOptions = {
							type: "basic",
							iconUrl: "WikiSummary-Icon.png",
							title: "WikiPedia Summary For Your Result",
							message: result.summary
						};

						chrome.notifications.create('WikiNotif', notifOptions);

					});
		}


		$('#keyword').val('');

    });
});
