var prices_arr = [8, 12, 16, 24, 36]
var pageviews_arr = ["10K Pageviews", "15K Pageviews", "100K Pageviews", "500K Pageviews", "1M Pageviews"]

var range = document.getElementById("range");
range.value = 2;

//Precio y vistas
var price = document.getElementById("price");
var pageviews = document.getElementById("pageviews");
price.textContent = "$" + (prices_arr[range.value]).toString();
pageviews.textContent = pageviews_arr[range.value];

var switch_ = document.getElementById("switch_")

//input range
range.oninput = function() {
  if (switch_.checked) 
    price.textContent = "$" + (prices_arr[this.value] - (prices_arr[this.value] * 0.25)).toString();
  else price.textContent = "$" + (prices_arr[this.value]).toString();

  pageviews.textContent = pageviews_arr[this.value];
}

//checkbox 
switch_.oninput = function() {
  if (switch_.checked) 
    price.textContent = "$" + (prices_arr[range.value] - (prices_arr[range.value] * 0.25)).toString();
  else price.textContent = "$" + (prices_arr[range.value]).toString();
}