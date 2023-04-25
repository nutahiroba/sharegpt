function showAlert(){
  alert("共有しますか？");
}

function getContent(){
  let questionText = document.getElementsByClassName("min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap break-words");

  // const answerText = document.getElementsByClassName("markdown prose w-full break-words dark:prose-invert light");

  var content = "";

  for (let i = 0; i< questionText.length; i++){

    result = questionText[i].textContent;

    content += result + ",\n\n";
  }
  // console.log(content);

  var blob =new Blob([content],{type:"text/csv"}); //配列に上記の文字列(str)を設定
  var link =document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download ="tempdate.csv";
  link.click();
}

chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: showAlert,
    function: getContent,
	});
});